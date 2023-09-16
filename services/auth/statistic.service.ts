import instance from "../../api/api.interceptor"

const STATISTIC = '/statistic'

export type Statistic = {
    name: string
    value : string
}

export const StatisticSevice = {
    async getMain() {
        return instance<Statistic[]>({
            url: STATISTIC,
            method: 'GET'
        })
    },

}