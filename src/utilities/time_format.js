const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const daySuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // 11th, 12th, 13th
        switch (day % 10) {
            case 1:  return 'st';
            case 2:  return 'nd';
            case 3:  return 'rd';
            default: return 'th';
        }
    };

    return `${day}${daySuffix(day)} ${month} ${year}`;
}

export default formatDate