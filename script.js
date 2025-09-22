// Objek untuk menyimpan semua terjemahan teks
const translations = {
    "id": {
        "nav_about": "Tentang",
        "nav_experience": "Pengalaman",
        "nav_projects": "Proyek",
        "nav_contact": "Kontak",
        "hero_greeting": "Halo, Saya", 
        "hero_tagline": "Data Scientist & Machine Learning Engineer yang berfokus pada transformasi data menjadi solusi bisnis yang cerdas.",
        "hero_btn_projects": "Lihat Proyek",
        "hero_btn_contact": "Hubungi Saya",
        "about_title": "Tentang Saya",
        "about_p1": "Saya seorang profesional di bidang data science dan machine learning dengan pengalaman dalam mengembangkan solusi berbasis data untuk berbagai masalah bisnis. Keahlian saya meliputi Python, SQL, dan berbagai framework machine learning.",
        "about_p2": "Saya selalu berusaha untuk terus belajar dan mengembangkan diri melalui berbagai workshop dan program pelatihan. Dengan semangat kolaborasi yang tinggi, saya senang bekerja dalam tim maupun secara mandiri untuk mencapai tujuan bersama.",
        "about_p3": "Saat ini saya aktif mencari peluang sebagai Data Scientist atau Machine Learning Engineer, namun terbuka untuk peran lain yang memanfaatkan keahlian analisis data saya.",
        "about_skills_title": "Keahlian Teknis:",
        "skill_eda": "Analisis Data Eksploratif",
        "skill_dl": "Deep Learning",
        "projects_count": "Proyek Selesai",
        "skills_count": "Teknologi Dikuasai",
        "commitment": "Komitmen",
        "experience_title": "Pengalaman Kerja",
        "exp1_title": "Asisten Dosen - Mata Kuliah Dasar Pemrograman",
        "exp1_company": "Universitas Tidar, Magelang, Indonesia",
        "exp1_date": "Agustus 2022 - Desember 2022",
        "exp1_desc": "Membantu proses belajar mengajar mahasiswa, berdiskusi tentang kurikulum dan materi pembelajaran, serta membantu dalam penilaian tugas mahasiswa.",
        "exp2_title": "Data Science Intern",
        "exp2_company": "Tech Startup, Jakarta, Indonesia",
        "exp2_date": "Januari 2022 - April 2022",
        "exp2_desc": "Mengembangkan model prediktif untuk analisis perilaku pengguna, membersihkan dan memproses dataset besar, serta membuat visualisasi data untuk presentasi stakeholder.",
        "projects_title": "Proyek Unggulan",
        "project1_title": "Loan Predictor",
        "project1_stack": "Pandas, Scikit-learn, Numpy, Streamlit",
        "project1_desc": "Sistem prediksi pinjaman yang menggunakan machine learning untuk menilai kelayakan peminjam dengan akurasi 92%.",
        "project2_title": "Sales KPI Dashboard",
        "project2_stack": "Pandas, Plotly, Streamlit",
        "project2_desc": "Dashboard interaktif untuk memvisualisasikan metrik penjualan dan membantu pengambilan keputusan berbasis data.",
        "project3_title": "Sentiment Analysis Dashboard",
        "project3_stack": "Pandas, Streamlit, NLTK",
        "project3_desc": "Aplikasi analisis sentimen untuk mengklasifikasikan opini pengguna dengan akurasi 87% menggunakan NLP.",
        "project_view_details": "Lihat Detail",
        "education_title": "Pendidikan",
        "edu1_degree": "Sarjana Teknik Elektro",
        "edu1_university": "Universitas Tidar, Magelang",
        "edu1_date": "Agustus 2018 - Mei 2024 (IPK 3.04/4.00)",
        "edu1_thesis_label": "Skripsi:",
        "edu1_thesis_value": "Implementasi Machine Learning Forecasting the Maximum Useful Power of Hydropower Plant.",
        "edu2_program": "Jalur Machine Learning",
        "edu2_institution": "Bangkit Academy, Jakarta",
        "edu2_date": "Februari 2022 - Juni 2022",
        "edu2_desc": "Program intensif yang berfokus pada Machine Learning dengan kurikulum dari Google. Mencakup data science, algoritma ML, deep learning, dan pengembangan profesional.",
        "certifications_title": "Sertifikasi",
        "cert1_title": "Sertifikat TensorFlow Developer",
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
        "contact_subtitle": "Tertarik berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya melalui saluran berikut!",
        "contact_info_title": "Informasi Kontak",
        "contact_email_label": "Email",
        "contact_location": "Lokasi",
        "contact_phone": "Telepon",
        "contact_social": "Temui Saya di:",
        "contact_availability": "Saya tersedia untuk proyek freelance, kolaborasi penelitian, atau peluang kerja penuh waktu.",
        "contact_footer": "Saya selalu siap membahas peluang baru, kolaborasi, atau proyek menarik. Biasanya merespon dalam 24 jam.",
        "footer_text": "Dibuat dengan <span class=\"text-red-500\">&hearts;</span> oleh Andrea Satria Nagari | &copy; 2023"
    },
    "en": {
        "nav_about": "About",
        "nav_experience": "Experience",
        "nav_projects": "Projects",
        "nav_contact": "Contact",
        "hero_greeting": "Hi There, I'm",
        "hero_tagline": "Data Scientist & Machine Learning Engineer focused on transforming data into intelligent business solutions.",
        "hero_btn_projects": "View Projects",
        "hero_btn_contact": "Contact Me",
        "about_title": "About Me",
        "about_p1": "I am a professional in data science and machine learning with experience in developing data-driven solutions for various business problems. My expertise includes Python, SQL, and various machine learning frameworks.",
        "about_p2": "I constantly strive to learn and grow through various workshops and training programs. With a strong collaborative spirit, I enjoy working in teams or independently to achieve common goals.",
        "about_p3": "I am currently seeking opportunities as a Data Scientist or Machine Learning Engineer, but open to other roles that leverage my data analysis skills.",
        "about_skills_title": "Technical Skills:",
        "skill_eda": "Exploratory Data Analysis",
        "skill_dl": "Deep Learning",
        "projects_count": "Projects Completed",
        "skills_count": "Technologies Mastered",
        "commitment": "Commitment",
        "experience_title": "Work Experience",
        "exp1_title": "Teaching Assistant - Introductory Programming Course",
        "exp1_company": "Universitas Tidar, Magelang, Indonesia",
        "exp1_date": "August 2022 - December 2022",
        "exp1_desc": "Assisted in teaching programming fundamentals, discussed curriculum and learning materials, and helped in assessing student assignments.",
        "exp2_title": "Data Science Intern",
        "exp2_company": "Tech Startup, Jakarta, Indonesia",
        "exp2_date": "January 2022 - April 2022",
        "exp2_desc": "Developed predictive models for user behavior analysis, cleaned and processed large datasets, and created data visualizations for stakeholder presentations.",
        "projects_title": "Featured Projects",
        "project1_title": "Loan Predictor",
        "project1_stack": "Pandas, Scikit-learn, Numpy, Streamlit",
        "project1_desc": "Loan prediction system using machine learning to assess borrower eligibility",
        "project2_title": "Sales KPI Dashboard",
        "project2_stack": "Pandas, Plotly, Streamlit",
        "project2_desc": "Interactive dashboard to visualize sales metrics and facilitate data-driven decision making.",
        "project3_title": "Sentiment Analysis Dashboard",
        "project3_stack": "Pandas, Streamlit, NLTK",
        "project3_desc": "A dashboard that analyzes user reviews of the Honor of Kings game on the Google Play Store.",
        "project_view_details": "View Details",
        "education_title": "Education",
        "edu1_degree": "Bachelor of Electrical Engineering",
        "edu1_university": "Universitas Tidar, Magelang",
        "edu1_date": "August 2018 - May 2024 (GPA 3.04/4.00)",
        "edu1_thesis_label": "Thesis:",
        "edu1_thesis_value": "Implementation of Machine Learning Forecasting the Maximum Useful Power of Hydropower Plant.",
        "edu2_program": "Machine Learning Path",
        "edu2_institution": "Bangkit Academy, Jakarta",
        "edu2_date": "February 2022 - June 2022",
        "edu2_desc": "Intensive program focused on Machine Learning with curriculum from Google. Covered data science, ML algorithms, deep learning, and professional development.",
        "certifications_title": "Certifications",
        "cert1_title": "TensorFlow Developer Certificate",
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
        "contact_subtitle": "Interested in collaboration or have questions? Feel free to reach out through the following channels!",
        "contact_info_title": "Contact Information",
        "contact_email_label": "Email",
        "contact_location": "Location",
        "contact_phone": "Phone",
        "contact_social": "Find Me On:",
        "contact_availability": "I'm available for freelance projects, research collaborations, or full-time opportunities.",
        "contact_footer": "I'm always ready to discuss new opportunities, collaborations, or interesting projects. Typically respond within 24 hours.",
        "footer_text": "Made with <span class=\"text-red-500\">&hearts;</span> by Andrea Satria Nagari | &copy; 2023"
    }
};

// Fungsi untuk mengatur bahasa
function setLanguage(lang) {
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update status tombol aktif
    if (lang === 'id') {
        document.getElementById('lang-id').classList.add('active');
        document.getElementById('lang-en').classList.remove('active');
    } else {
        document.getElementById('lang-en').classList.add('active');
        document.getElementById('lang-id').classList.remove('active');
    }
}

// Inisialisasi bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'id';
    setLanguage(preferredLanguage);
    
    // Tambahkan event listener untuk tombol bahasa
    document.getElementById('lang-id').addEventListener('click', () => setLanguage('id'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    
    // Menu mobile toggle
    document.getElementById('mobile-menu').addEventListener('click', () => {
        document.getElementById('mobile-nav').classList.toggle('hidden');
    });
    
    // Animasi saat scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-slide-up, .animate-fade-in').forEach(el => {
        observer.observe(el);
    });
});