function getStringIsNumber(a) {
  return Array.isArray(a.match(/\d+/))?a.match(/\d+/):a
}
export function compareByNumber(a, b) {
  // 提取文件名中的序号  
  const numA = parseInt(getStringIsNumber(a), 10);  
  const numB = parseInt(getStringIsNumber(b), 10);  
  // 比较序号  
  if (numA < numB) {  
    return -1;  
  }  
  if (numA > numB) {  
    return 1;  
  }  
  // 如果序号相等，则保持原有顺序（稳定排序）  
  return 0;  
} 