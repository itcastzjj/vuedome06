// 导入封装好的网络请求类工具
import Network from './netwock';

// 封装各种接口请求
// export const 接口名 = () => Network.get('/路由',参数对象);
export const getHomeAllData = () => Network.get('/api/index');
export const getHomeGoodsData = (a,b) => Network.get(a,b);