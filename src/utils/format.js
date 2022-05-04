export const toUpperCaseFirstChar = text => {
  const firstChar = text.charAt(0).toUpperCase();
  return firstChar + text.slice(1);
};

export const formatDate = date => {
  const arr = [
    'Lun',
    'Mar',
    'Mie',
    'Jue',
    'Vie',
    'Sab',
    'Dom',
    'Lun',
    'Mar',
    'Mie',
    'Jue',
    'Vie',
    'Sab',
    'Dom',
  ];
  return arr[date];
};
