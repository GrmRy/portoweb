// script.js

// Objek untuk menyimpan semua terjemahan teks
const translations = {
    "id": {
        "nav_resume": "Resume",
        "nav_contact": "Kontak",
        "hero_greeting": "Halooo Perkenalkan Aku", 
        "hero_tagline": "Saya adalah seorang Data Enthusiast yang bersemangat mengubah data menjadi wawasan dan membangun solusi cerdas.",
        "hero_btn_projects": "Lihat Proyek Saya",
        "hero_btn_contact": "Hubungi Saya",
        "about_title": "Tentang Saya",
        "about_p1": "Saya seorang gamer dan penggemar data dengan minat mendalam pada data science dan machine learning. Keahlian saya terletak pada Python dan SQL, dan saya memiliki pemahaman yang kuat tentang analisis data eksploratif dan machine learning.",
        "about_p2": "Saya terus-menerus menantang diri saya dengan mengikuti berbagai workshop dan bootcamp terkait data science untuk meningkatkan pengetahuan dan keterampilan saya. Saya sangat termotivasi, mampu bekerja secara mandiri maupun dalam tim, dan selalu bersemangat untuk mempelajari hal-hal baru.",
        "about_p3": "Saya aktif mencari peluang sebagai data scientist atau machine learning engineer, tapi saya terbuka untuk mempertimbangkan peran apa pun yang dapat menggunakan keahlian saya.",
        "about_skills_title": "Keahlian Utama:",
        "skill_eda": "Analisis Data Eksploratif",
        "skill_dl": "Deep Learning",
        "experience_title": "Pengalaman Kerja",
        "exp1_title": "Asisten Dosen - Mata Kuliah Dasar Pemrograman",
        "exp1_company": "Universitas Tidar, Magelang, Indonesia",
        "exp1_date": "Agustus 2022 - Desember 2022",
        "exp1_desc": "Asisten dosen dalam mata kuliah dasar pemrograman untuk membantu proses belajar mengajar mahasiswa dengan dosen, membahas kurikulum dan materi, serta membantu proses penilaian tugas mahasiswa dengan dosen.",
        "projects_title": "Proyek Unggulan",
        "project1_title": "Loan Predictor",
        "project1_desc": "Mengembangkan model machine learning untuk memprediksi hasil pembayaran pinjaman. Peningkatan kinerja model melalui rekayasa fitur dan hyperparameter tuning.",
        "project2_title": "Dasbord KPI Penjualan",
        "project2_desc": "Mengembangkan dan menerapkan aplikasi web interaktif untuk memvisualisasikan metrik kinerja penjualan utama. Memungkinkan pemantauan tren dan pengambilan keputusan berbasis data.",
        "project3_title": "Dasbord Analisis Sentimen",
        "project3_desc": "Mengembangkan aplikasi web analisis sentimen untuk menganalisis dan mengklasifikasikan teks pengguna. Menerapkan teknik NLP untuk visualisasi tren sentimen.",
        "project_view_details": "Lihat Detail &rarr;",
        "education_title": "Pendidikan",
        "edu1_degree": "Sarjana Teknik Elektro",
        "edu1_university": "Universitas Tidar, Magelang, Indonesia",
        "edu1_date": "Agustus 2018 - Mei 2024 (IPK 3.04/4.00)",
        "edu1_thesis_label": "Skripsi:",
        "edu1_thesis_value": "Implementasi Machine Learning Forecasting the Maximum Useful Power of Hydropower Plant.",
        "edu2_program": "Jalur Machine Learning",
        "edu2_institution": "Bangkit Academy, Jakarta, Indonesia",
        "edu2_date": "Februari 2022 - Juni 2022",
        "edu2_desc": "Program kesiapan karir intensif berfokus pada Machine Learning. Mendapat dasar kuat dalam data science, algoritma ML, deep learning, soft skills, dan Bahasa Inggris.",
        "certifications_title": "Sertifikasi",
        "cert1_title": "Sertifikat Tensorflow Developer",
        "cert1_issuer_date": "Tensorflow | Diterbitkan Juli 2022",
        "cert2_title": "Spesialisasi DeepLearning.AI TensorFlow Developer",
        "cert2_issuer_date": "Coursera | Diterbitkan April 2022",
        "cert3_title": "Spesialisasi TensorFlow: Data and Deployment",
        "cert3_issuer_date": "Coursera | Diterbitkan April 2022",
        "cert4_title": "Spesialisasi Matematika untuk Machine Learning",
        "cert4_issuer_date": "Coursera | Diterbitkan Maret 2022",
        "cert5_title": "Spesialisasi Google IT Automation With Python",
        "cert5_issuer_date": "Coursera | Diterbitkan Maret 2022",
        "contact_title": "Mari Terhubung",
        "contact_subtitle": "Saya tertarik dengan peluang baru dan kolaborasi. Jangan ragu untuk menghubungi saya!",
        "contact_email_label": "Email:",
        "footer_text": "Dibuat dengan <span class=\"text-red-500\">&hearts;</span> oleh Andrea Satria Nagari."
    },
    "en": {
        "nav_resume": "Resume",
        "nav_contact": "Contact",
        "hero_greeting": "Hi There, I'm",
        "hero_tagline": "A Data Enthusiast passionate about turning data into insights and building intelligent solutions.",
        "hero_btn_projects": "View My Projects",
        "hero_btn_contact": "Get In Touch",
        "about_title": "About Me",
        "about_p1": "I am an avid gamer and a data enthusiast with a deep passion for data science and machine learning. My expertise lies in Python and SQL, and I possess a strong understanding of exploratory data analysis and machine learning.",
        "about_p2": "I constantly challenge myself by attending various workshops and bootcamps related to data science to enhance my knowledge and skills. I am highly motivated, capable of working independently or in a team, and always eager to learn new things.",
        "about_p3": "I am actively seeking opportunities as a data scientist or machine learning engineer, but I am open to considering any role that can use my skills.",
        "about_skills_title": "Main Skills:",
        "skill_eda": "Exploratory Data Analysis",
        "skill_dl": "Deep Learning",
        "experience_title": "Work Experience",
        "exp1_title": "Assistant Lecturer - Introductory Programming Course",
        "exp1_company": "Universitas Tidar, Magelang, Indonesia",
        "exp1_date": "August 2022 - December 2022",
        "exp1_desc": "Lecturer assistant in introductory programming course to assist the teaching and learning process of students with lecturers, discuss curriculum and materials, as well as assist the process of assessing student assignments with lecturers.",
        "projects_title": "Featured Projects",
        "project1_title": "Loan Predictor",
        "project1_desc": "Developed a machine learning model to predict loan repayment outcomes. Improved model performance through feature engineering and hyperparameter tuning.",
        "project2_title": "Sales KPI Dashboard",
        "project2_desc": "Developed and deployed an interactive web application to visualize key sales performance metrics. The dashboard aggregates and displays KPIs, enabling stakeholders to monitor trends and make data-driven decisions.",
        "project3_title": "Sentiment Analysis Dashboard",
        "project3_desc": "Developed a sentiment analysis web application to analyze and classify user-generated text. Employed natural language processing techniques to process and visualize sentiment trends effectively.",
        "project_view_details": "View Details &rarr;",
        "education_title": "Education",
        "edu1_degree": "Bachelor of Electrical Engineering",
        "edu1_university": "Universitas Tidar, Magelang, Indonesia",
        "edu1_date": "August 2018 - May 2024 (GPA 3.04/4.00)",
        "edu1_thesis_label": "Final Thesis:",
        "edu1_thesis_value": "Implementation of Machine Learning Forecasting the Maximum Useful Power of Hydropower Plant.",
        "edu2_program": "Machine Learning Path",
        "edu2_institution": "Bangkit Academy, Jakarta, Indonesia",
        "edu2_date": "February 2022 - June 2022",
        "edu2_desc": "Completed an intensive, industry-driven career readiness program focused on Machine Learning. Gained a deep foundation in data science, machine learning algorithms, and the practical application of deep learning, tailored to address real-world challenges. This experience also included extensive training in soft skills, English language proficiency.",
        "certifications_title": "Certifications",
        "cert1_title": "Tensorflow Developer Certificate",
        "cert1_issuer_date": "Tensorflow | Issued July 2022",
        "cert2_title": "DeepLearning.AI TensorFlow Developer Specialization",
        "cert2_issuer_date": "Coursera | Issued April 2022",
        "cert3_title": "TensorFlow: Data and Deployment Specialization",
        "cert3_issuer_date": "Coursera | Issued April 2022",
        "cert4_title": "Mathematics for Machine Learning Specialization",
        "cert4_issuer_date": "Coursera | Issued March 2022",
        "cert5_title": "Google IT Automation With Python Specialization",
        "cert5_issuer_date": "Coursera | Issued March 2022",
        "contact_title": "Let's Connect",
        "contact_subtitle": "I'm interested in new opportunities and collaborations. Feel free to reach out!",
        "contact_email_label": "Email:",
        "footer_text": "Made with <span class=\"text-red-500\">&hearts;</span> by Andrea Satria Nagari."
    }
};

// Ambil elemen tombol bahasa
const langIdButton = document.getElementById('lang-id');
const langEnButton = document.getElementById('lang-en');
// Ambil semua elemen yang bisa diterjemahkan
const translatableElements = document.querySelectorAll('[data-lang-key]');

// Fungsi untuk mengatur bahasa
function setLanguage(lang) {
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // Gunakan innerHTML agar tag span di footer tetap bekerja
        }
    });
    document.documentElement.lang = lang; // Update atribut lang pada tag html
    localStorage.setItem('preferredLanguage', lang); // Simpan preferensi bahasa

    // Update status tombol aktif
    if (lang === 'id') {
        langIdButton.classList.add('active');
        langEnButton.classList.remove('active');
    } else {
        langEnButton.classList.add('active');
        langIdButton.classList.remove('active');
    }
}

// Tambahkan event listener ke tombol bahasa
if (langIdButton && langEnButton) {
    langIdButton.addEventListener('click', () => setLanguage('id'));
    langEnButton.addEventListener('click', () => setLanguage('en'));
}


// Inisialisasi bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        setLanguage(preferredLanguage);
    } else {
        // Default ke Bahasa Indonesia jika tidak ada preferensi
        setLanguage('id');
    }
});
