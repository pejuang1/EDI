import { AsyncEncryptStorage } from 'encrypt-storage';

export const MAIN_API = 'https://long-gold-yak-hem.cyclic.app';
export const encryptStorage = new AsyncEncryptStorage('kEErTNFWAbWxaGRdjGIN7MvwS9FwJHGKra70hQkhvu*nUXGSZkMarAfpoVOlCr%&Rux(eKjvgAMZ75waz4KcK#dIM@&eeq4$Vzvb', {stateManagementUse: true, storageType: 'sessionStorage'})

//SIZESCREEN
export const isDesktop = '@media only screen and (min-width: 1224px)';
export const isBigscreen = '@media only screen and (min-width: 1824px)';
export const isRetina = '@media only screen and (min-width: 2500px)';
export const isTablet = '@media only screen and (max-width: 1223px)';
export const isMobile = '@media only screen and (max-width: 767px)';

export const userToken = async() => {
    return await encryptStorage.getItem('userToken')
}