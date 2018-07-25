import Mock from 'mockjs'
import goods from '../data/goods.json'
import ratings from '../data/ratings.json'
import seller from '../data/seller.json'

Mock.mock('/data/goods', {
        data: goods
    }),
    Mock.mock('/data/ratings', {
        data: ratings
    }),
    Mock.mock('/data/seller', {
        data: seller
    })