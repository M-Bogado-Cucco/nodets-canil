
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish' // o vazio '' é acionado na busca

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== '') {
        returnObject[activeMenu] = true
    }

    return returnObject
}