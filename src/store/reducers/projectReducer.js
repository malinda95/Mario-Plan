const initState = {
    projects: [
        { id: '1', title: 'malonda wima da  ednedje', content: 'caemc kiull malinda yetr teyaghd deaj' },
        { id: '2', title: 'daeajb eajhbd beaja', content: 'caemc kiudenajkd eabd a djhabjda ajdjabdad' },
        { id: '3', title: 'dednajkd eajkd qwgghqd ', content: 'caejahjd eajhbjd ed adhajd adja dj adj' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created the project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
        default:
            return state;
    }
}
export default projectReducer