import book from "../assets/image/ArticleImg/book.jpg"
import running from "../assets/image/ArticleImg/running.jpg"
import sleep from "../assets/image/ArticleImg/sleep.jpeg"

const articles = [
    {
        id: 201,
        _title: "Read Books for Healthy Mind",
        _desc: 'Reading can help to boost your mood and make you feel happier. It can also help you to process difficult emotions and develop coping mechanisms.',
        _img: book,
    },
    {
        id: 202,
        _title: "Adequate Sleep",
        _desc: 'Ensure you get enough quality sleep. Aim for 7-9 hours of sleep per night to support both your physical and mental well-being.',
        _img: sleep,
    },
    {
        id: 203,
        _title: "Running",
        _desc: 'Create a forum where runners can discuss training strategies, share their experiences, and seek advice from fellow runners.',
        _img: running,
    },
    // {
    //     id: 204,
    //     _title: "",
    //     _desc: '',
    //     _img: ""
    // },
    // {
    //     id: 205,
    //     _title: "",
    //     _desc: '',
    //     _img: ''
    // },
    // {
    //     id: 206,
    //     _title: "",
    //     _desc: '',
    //     _img: ''
    // },
];

let sevenDays = [
    { day: '1', dayName: 'First Day' },
    { day: '2', dayName: 'Second Day' },
    { day: '3', dayName: 'Third Day' },
    { day: '4', dayName: 'Fourth Day' },
    { day: '5', dayName: 'Fifth Day' },
    { day: '6', dayName: 'Sixth Day' },
    { day: '7', dayName: 'Seventh Day' },
];
let twentyOneDays = [
    { day: '1', dayName: 'First Day' },
    { day: '2', dayName: 'Second Day' },
    { day: '3', dayName: 'Third Day' },
    { day: '4', dayName: 'Fourth Day' },
    { day: '5', dayName: 'Fifth Day' },
    { day: '6', dayName: 'Sixth Day' },
    { day: '7', dayName: 'Seventh Day' },
    { day: '8', dayName: 'Eighth Day' },
    { day: '9', dayName: 'Nineth Day' },
    { day: '10', dayName: 'Tenth Day' },
    { day: '11', dayName: 'Eleventh Day' },
    { day: '12', dayName: 'Twelwth Day' },
    { day: '13', dayName: 'Thirteen Day' },
    { day: '14', dayName: 'Fourteen Day' },
    { day: '15', dayName: 'Fifteen Day' },
    { day: '16', dayName: 'Sixteen Day' },
    { day: '17', dayName: 'Seventeen Day' },
    { day: '18', dayName: 'Eighteen Day' },
    { day: '19', dayName: 'Nineteen Day' },
    { day: '20', dayName: 'Twenty Day' },
    { day: '21', dayName: 'TwentyOne Day' },
];

function getThreeArticles() {
    const shuffledArray = [...articles];
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, 3);
}
export {
    articles,
    getThreeArticles,
    sevenDays,
    twentyOneDays
}