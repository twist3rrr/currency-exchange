export const getToday = () => {
    return new Date().toISOString().substr(0, 10);
}