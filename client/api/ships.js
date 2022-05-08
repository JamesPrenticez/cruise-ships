import request from 'superagent'

export function getShips() {
    return request.get('/api/ships')
        .then(res => res.body.result)
}

export function getShipById(id) {
    return request.get(`/api/ship/${id}`)
        .then(res => res.body.result)
}