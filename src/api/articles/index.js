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
/**
 * 
 * 根据id 查询文章
 */
export const getarticbyidapi = (id) => {
  return ajax({
    method: 'post',
    url: '/api/getarticbyid',
    data: {
      id
    }
  })
}
/**
 * 上传图片
 */
export const uploadimgapi = (data) => {
  return ajax({
    method: 'post',
    url: '/api/uploadimg',
    data
  })
}
/**
 * 上传文章
 */
export const addarticleitemapi = (data) => {
  return ajax({
    method: 'post',
    url: '/api/addarticleitem',
    data
  })
}
/**
 * 浏览量
 */
export const addarticleviewsapi = (data) => {
  return ajax({
    method: 'post',
    url: '/api/addarticleviews',
    data
  })
}
