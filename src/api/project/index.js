import gitajax from '@/util/githubreq.js'
import githubusername from '@/util/GithubUserName.js'

/**
 * 获取开源
 * @returns
 */ 
export const getrepositoryapi = () => {
  return gitajax({
    method: 'get',
    url: `/users/${githubusername}/repos`,
  })
}