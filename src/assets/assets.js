import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import cart_icon from './basket_icon.png' 
import rating_starts from './rating_starts.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import footerlogo from './footerlogo.png'


import category_tech from './c_1.png'
import category_business from './c_2.png'
import category_arts from './c_3.png'
import category_datascience from './c_4.png'
import category_health from './c_5.png'
import category_languages from './c_6.png'
import category_music from './c_7.png'
import category_personal_dev from './c_8.png'


import course_img_1 from './react.png'
import course_img_2 from './css.png'
import course_img_3 from './business.png'
import course_img_4 from './marketing.png'
import course_img_5 from './drawing.png'
import course_img_6 from './painting.png'
import course_img_7 from './datascience.png'
import course_img_8 from './sql.png'
import course_img_9 from './node.png'
import course_img_10 from './cyber.png'
import course_img_11 from './financial.png'
import course_img_12 from './leader.png'
import course_img_13 from './digital.png'
import course_img_14 from './conser.png'
import course_img_15 from './ml.png'
import course_img_16 from './nutrition.png'
import course_img_17 from './piano.png'
import course_img_18 from './Public.png'


export const assets = {
    logo,
    cart_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    footerlogo
}

export const category_list = [
    {
        category_name: "Technology",
        category_image: category_tech
    },
    {
        category_name: "Business",
        category_image: category_business
    },
    {
        category_name: "Arts",
        category_image: category_arts
    },
    {
        category_name: "Data Science",
        category_image: category_datascience
    },
    {
        category_name: "Health",
        category_image: category_health
    },
    {
        category_name: "Languages",
        category_image: category_languages
    },
    {
        category_name: "Music",
        category_image: category_music
    },
    {
        category_name: "Personal Dev",
        category_image: category_personal_dev
    }]

export const course_list = [
    {
        _id: "1",
        name: "Intro to React",
        image: course_img_1,
        price: 1649,
        description: "Learn the fundamentals of React to build modern, interactive web applications.",
        category: "Technology"
    },
    {
        _id: "2",
        name: "Advanced CSS",
        image: course_img_2,
        price: 2099,
        description: "Master advanced CSS techniques like Flexbox, Grid, and custom animations.",
        category: "Technology"
    }, {
        _id: "3",
        name: "Business Fundamentals",
        image: course_img_3,
        price: 2499,
        description: "Get a solid foundation in the core concepts of modern business and management.",
        category: "Business"
    }, {
        _id: "4",
        name: "Digital Marketing 101",
        image: course_img_4,
        price: 1899,
        description: "Understand the essentials of SEO, SEM, and social media marketing.",
        category: "Business"
    }, {
        _id: "5",
        name: "Introduction to Drawing",
        image: course_img_5,
        price: 1249,
        description: "Learn the basic techniques and principles of drawing from scratch.",
        category: "Arts"
    }, {
        _id: "6",
        name: "Watercolor Painting",
        image: course_img_6,
        price: 1499,
        description: "Explore the beautiful medium of watercolor with step-by-step projects.",
        category: "Arts"
    }, {
        _id: "7",
        name: "Data Science with Python",
        image: course_img_7,
        price: 4199,
        description: "Dive into data analysis, visualization, and machine learning using Python.",
        category: "Data Science"
    }, {
        _id: "8",
        name: "SQL for Beginners",
        image: course_img_8,
        price: 1649,
        description: "Learn how to manage and query databases using the SQL language.",
        category: "Data Science"
    },
    {
        _id: "9",
        name: "Node.js Backend Development",
        image: course_img_9,
        price: 3349,
        description: "Build scalable, high-performance web applications using the Node.js runtime.",
        category: "Technology"
    },
    {
        _id: "10",
        name: "Cybersecurity Essentials",
        image: course_img_10,
        price: 3749,
        description: "Learn the fundamentals of cybersecurity and how to protect digital assets from threats.",
        category: "Technology"
    },
    {
        _id: "11",
        name: "Financial Accounting Basics",
        image: course_img_11,
        price: 2499,
        description: "Understand the core principles of financial accounting, from bookkeeping to financial statements.",
        category: "Business"
    },
    {
        _id: "12",
        name: "Leadership & Management",
        image: course_img_12,
        price: 2949,
        description: "Develop essential leadership skills to effectively manage teams and drive success.",
        category: "Business"
    },
    {
        _id: "13",
        name: "Digital Photography Masterclass",
        image: course_img_13,
        price: 2099,
        description: "Master your camera and learn the art of composition, lighting, and photo editing.",
        category: "Arts"
    },
    {
        _id: "14",
        name: "Conversational Spanish",
        image: course_img_14,
        price: 1599,
        description: "Learn practical Spanish phrases and conversation skills for everyday situations.",
        category: "Languages"
    },
    {
        _id: "15",
        name: "Machine Learning A-Z",
        image: course_img_15,
        price: 4999,
        description: "A comprehensive introduction to machine learning concepts and algorithms.",
        category: "Data Science"
    },
    {
        _id: "16",
        name: "Nutrition and Healthy Living",
        image: course_img_16,
        price: 1249,
        description: "Learn the science of nutrition and build sustainable, healthy eating habits.",
        category: "Health"
    },
    {
        _id: "17",
        name: "Piano for Complete Beginners",
        image: course_img_17,
        price: 1849,
        description: "Start your musical journey by learning the basics of playing the piano.",
        category: "Music"
    },
    {
        _id: "18",
        name: "Public Speaking Mastery",
        image: course_img_18,
        price: 1699,
        description: "Build confidence and learn to deliver powerful, persuasive speeches.",
        category: "Personal Dev"
    }
]