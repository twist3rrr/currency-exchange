export default function getToday() {
    return new Date().toISOString().substr(0, 10);
}
