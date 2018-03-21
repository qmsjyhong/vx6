/**
 * Created by Administrator on 2017/12/26.
 */
const MEMORY_CACHE = Object.create(null);

const Store = (...args) => {
  let [isSession, name, value, prefix] = [false];

  if (typeof args[0] === 'boolean') {
    isSession = args[0];
    args.shift();
  }
  name = args[0];
  value = args[1];
  prefix = args[2] === void 0 ? '_NOVA_DATA_' : args[0];
  const Storage = isSession ? window.sessionStorage : window.localStorage;

  if (!name || !typeof name === 'string') {
    throw new Error('缓存名称必须是一个字符串');
  }

  const CACHE_KEY = prefix && typeof prefix === 'string' ? prefix + name : name;

  // delete
  if (value === null) {
    delete MEMORY_CACHE[CACHE_KEY];
    return Storage.removeItem(CACHE_KEY);
  }

  // set
  if (value !== void 0) {
    MEMORY_CACHE[CACHE_KEY] = value;
    return Storage.setItem(CACHE_KEY, JSON.stringify(value));
  }

  // get
  if (MEMORY_CACHE[CACHE_KEY] !== void 0) {
    return MEMORY_CACHE[CACHE_KEY];
  }
  let _value = void 0;

  try {
    _value = JSON.parse(Storage.getItem(CACHE_KEY));
  } catch (e) {}

  return _value;
};

export default Store;
