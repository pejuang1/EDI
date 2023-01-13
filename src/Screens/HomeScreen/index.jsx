import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { Modal, Table } from 'rsuite';
import { TbEdit } from 'react-icons/tb';
import { HiTrash } from 'react-icons/hi'
import { AutoComplete } from 'rsuite';

import { styles } from './style';

import { deleteUser, editUser, getDetailUser, getUser, verifyToken } from './action';
import { userToken } from '../GlobalFunction';
import { register } from '../LoginScreen/action';

const HomeScreen = () => {

    const { Column, HeaderCell, Cell } = Table

    const [isModal, setIsModal] = useState(false)
    const [isModalEdit, setIsModalEdit] = useState(false)
    const [isFilter, setIsFilter] = useState(false)
    const [filter, setFilter] = useState([])
    const [filterData, setFilterData] = useState([])
    const [dataUser, setDataUser] = useState([])
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        status: '',
        namaLengkap: '',
        _id: ''
    })

    useEffect(() => {
        handleGetUser()
    }, [])

    const handleGetUser = async() => {
        try {
            const token = await userToken()
            const result = await getUser(token)
            if(result.status == 200){
                setDataUser(result.data.data)
                setFilter(result.data.data.map(val => val._id))
            }
        } catch (error) {
            console.log('handleGetUser', error.response);
        }
    }

    const handleAddUser = async() => {
        try {
            const data = {
                username: userData.username,
                password: userData.password,
                status: userData.status,
                namaLengkap: userData.namaLengkap
            }
            await register(data)
            handleGetUser()
            setIsModal(false)
            setIsModalEdit(false)
        } catch (error) {
            console.log('handleAddUser', error.response);
        }
    }

    const handleDeleteUser = async(e) => {
        try {
            const token = await userToken()
            const verify = await handleVerifyToken(token)
            if(verify == e){
                alert('Anda tidak dapat delete akun yg sedang anda loginkan')
                setIsModal(false)
            }else{
                const result = await deleteUser(token, e)
                handleGetUser()
                setIsModal(false)
            }
        } catch (error) {
            console.log('handleDeleteUser', error.response);
        }
    }

    const handleVerifyToken = async(token) => {
        try {
            const result = await verifyToken(token)
            if(result.status == 200){
                return result.data.data
            }
        } catch (error) {
            console.log('handleVerifyToken', error.response);
        }
    }

    const handleEditUser = async(e) => {
        try {
            setUserData({
                ...userData,
                username: e.username,
                password: e.password,
                status: e.status,
                namaLengkap: e.namaLengkap,
                _id: e._id
            })
            setIsModal(true)
            setIsModalEdit(true)
        } catch (error) {
            console.log('handleEditUser', error.response);
        }
    }

    const handleSaveEditUser = async() => {
        try {
            const token = await userToken()
            const data = {
                username: userData.username,
                password: userData.password,
                status: userData.status,
                namaLengkap: userData.namaLengkap
            }
            await editUser(token, userData._id, data)
            setIsModal(false)
            setIsModalEdit(false)
            handleGetUser()
        } catch (error) {
            console.log('handleSaveEditUser', error.response);
        }
    }

    const handleGetUserById = async(e) => {
        try {
            dataUser.forEach(async(item) => {
                if(e == item._id){
                    setIsFilter(true)
                    const token = await userToken()
                    const result = await getDetailUser(token, e)
                    if(result.status == 200){
                        setFilterData([item])
                    }
                }
                if(e == ''){
                    setIsFilter(false)
                }
            })
        } catch (error) {
            console.log('handleGetUserById', error.response);
        }
    }

    const handleOnClose = () => {
        setIsModal(false)
        setIsModalEdit(false)
        setUserData({})
    }

    return (
        <div>
            <div className={css(styles.containerAddButton)}>
                <AutoComplete 
                    placeholder='Search...'
                    data={filter} 
                    onChange={(e) => handleGetUserById(e)}
                />
                <button className={css(styles.addButton)} onClick={() => setIsModal(true)}>Add User</button>
            </div>
            <div className={css(styles.containerTable)}>
                <Table 
                    height={500} 
                    width={950}
                    data={isFilter ? filterData : dataUser}
                    bordered
                    cellBordered
                    autoHeight
                    affixHeader
                    affixHorizontalScrollbar
                >
                    <Column width={250}>
                        <HeaderCell>User ID</HeaderCell>
                        <Cell>
                            {
                                rowData => (
                                    <p 
                                        style={{cursor: 'pointer'}} 
                                        onClick={() => alert(`Nama: ${rowData.namaLengkap}\nUsername: ${rowData.username}\nStatus: ${rowData.status}`)}
                                    >
                                    {rowData._id}
                                    </p>
                                )
                            }
                        </Cell>
                    </Column>
                    <Column width={200}>
                        <HeaderCell>Nama Lengkap</HeaderCell>
                        <Cell dataKey="namaLengkap" />
                    </Column>
                    <Column width={150}>
                        <HeaderCell>Username</HeaderCell>
                        <Cell dataKey="username" />
                    </Column>
                    <Column>
                        <HeaderCell>Password</HeaderCell>
                        <Cell dataKey="password">
                            {
                                rowData => (
                                    <p>***{rowData.password.substr(30,3)}</p>
                                )
                            }
                        </Cell>
                    </Column>
                    <Column>
                        <HeaderCell>Status</HeaderCell>
                        <Cell dataKey="status" />
                    </Column>
                    <Column width={150} align='center'>
                        <HeaderCell>Action</HeaderCell>

                        <Cell style={{ padding: '6px' }}>
                        {
                            rowData => (
                                <div>
                                    <TbEdit className={css(styles.editButton)} onClick={() => handleEditUser(rowData)}/>
                                    <HiTrash className={css(styles.deleteButton)} onClick={() => handleDeleteUser(rowData._id)}/>
                                </div>
                            )
                        }
                        </Cell>
                    </Column>
                </Table>
            </div>

            <Modal open={isModal} onClose={handleOnClose}>
                <Modal.Header>
                    <Modal.Title>{isModalEdit ? 'Edit User' : 'Add User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className={css(styles.titleInput)}>Username</p>
                    <input
                        value={userData.username}
                        className={css(styles.inputData)}
                        onChange={(e) => setUserData({...userData, username: e.target.value})}
                        type='text'
                    />
                    <p className={css(styles.titleInput)}>Nama Lengkap</p>
                    <input 
                        value={userData.namaLengkap}
                        className={css(styles.inputData)}
                        onChange={(e) => setUserData({...userData, namaLengkap: e.target.value})}
                        type='text'
                    />
                    <p className={css(styles.titleInput)}>Password</p>
                    <input 
                        value={userData.password}
                        className={css(styles.inputData)}
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                        type='password'
                    />
                    <p className={css(styles.titleInput)}>Status</p>
                    <input 
                        value={userData.status}
                        className={css(styles.inputData)}
                        onChange={(e) => setUserData({...userData, status: e.target.value})}
                        type='text'
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className={css(styles.buttonSave)} onClick={isModalEdit ? handleSaveEditUser : handleAddUser}>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HomeScreen;