export const goToDetails = (history, id) => {
    history.push(`/details/${id}`)
}

export const goToHome = (history) => {
    history.push('/')
}

export const goToPokedex = (history) => {
    history.push('/pokedex')
}

export const goBack = (history) => {
    history.goBack()
}