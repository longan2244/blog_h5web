import ajax from '@/util/req.js'
/**
 * 获取分类
 * @returns 
 */
export const getarticleclassapi = () => {
  return ajax({
    method: 'get',
    url: '/api/getarticleclass',
  })
}
/**
 * 
 获取列表
 */
export const getarticlelistlistapi = (data) => {
  return ajax({
    method: 'post',
    url: '/api/getarticlelist',
    data
  })
}