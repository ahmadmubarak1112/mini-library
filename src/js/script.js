if ('history' in window) {
    window.history.scrollRestoration = 'manual';
}

///// BOOKS DATA
const books = [

    {
        id: 1,
        title: "Miracle of the Quran",
        author: "Caner Taslaman",
        publisher: "Mizan",
        year: 2010,
        category: "islamic",

        cover: "./assets/img/books/covers/1/miracle-of-the-quran.webp",

        isbn: "978-979-433-570-3",
        pages: 482,
        language: "Indonesian",

        description:
            'Miracle of the Quran merupakan produk riset yang panjang dan berjelajah luas. Inilah buku paling komprehensif dewasa ini yang mengkaji hubungan antara Al-Quran dan sains modern. Ditulis dengan gaya yang mudah dipahami oleh awam, buku ini mengarahkan pembaca untuk memperdalam pemahaman tentang penciptaan alam semesta dan mengevaluasi peristiwa ini dari perspektif yang sepenuhnya baru. Di sepanjang buku ini, Anda akan menyaksikan bagaimana Al-Quran berbicara tentang pelbagai fenomena. Kajian terhadap topik ini akan memberi Anda kesempatan untuk mengakui pernyataan tak terbantahkan bahwa : "Al-Quran adalah karya Tuhan, bukan karangan manusia."',

        gallery: [
            "./assets/img/books/covers/1/miracle-of-the-quran.webp",
            "./assets/img/books/details/miracle-of-the-quran/1.webp",
            "./assets/img/books/details/miracle-of-the-quran/2.webp"
        ],

        favorite: false
    },

    {
        id: 2,
        title: "HTML5 & CSS3 Belajar Dari Kasus",
        author: "R.H. Sianipar",
        publisher: "INFORMATIKA",
        year: 2015,
        category: "technology",

        cover: "./assets/img/books/covers/2/html5-css3.webp",

        isbn: "978-602-1514-67-2",
        pages: 458,
        language: "Indonesian",

        description:
            "Buku ini diperuntukkan bagi semua programmer web, baik yang pemula, maupun yang pro berpengalaman. Para pemula akan mendapati banyak soal dan penyelesaian yang dapat mempercepat pemahamannya. Rangkuman atas fitur-fitur HTML5/CSS3 akan berguna bagi programmer pro. Buku ini cocok menjadi referensi cepat bagi semua kalangan. Buku ini merupakan panduan komprehensif untuk pemrograman web.",

        gallery: [
            "./assets/img/books/covers/2/html5-css3.webp",
            "./assets/img/books/details/html5-css3/1.webp",
            "./assets/img/books/details/html5-css3/2.webp"
        ],

        favorite: false
    },

    {
        id: 3,
        title: "New Matematika 100",
        author: "Handi Pramono, dkk",
        publisher: "Indonesia 100 Publishing",
        year: 2010,
        category: "education",

        cover: "./assets/img/books/covers/3/matematika-100.webp",

        isbn: "978-979-185-680-2",
        pages: 134,
        language: "Indonesian",

        description:
            "Apakah matematika itu sulit? Sesungguhnya, matematika menjadi sulit antara lain karena terlalu banyak rumus yang harus di hafal, terlalu banyak batasan yang harus diingat. Jika matematika tidak harus menghafal rumus, posisi jari, pembatasan-pembatasan atau pengelompokkan yang kurang perlu, maka matematika bisa jadi sangat mudah. Buku ini membantu kalian melakukan perhitungan perkalian, pembagian, akar kuadrat, dan akar pangkat 3 dengan sangat mudahnya.",

        gallery: [
            "./assets/img/books/covers/3/matematika-100.webp",
            "./assets/img/books/details/matematika-100/1.webp",
            "./assets/img/books/details/matematika-100/2.webp"
        ],

        favorite: false
    },

    {
        id: 4,
        title: "Sejarah Kebudayaan Islam",
        author: "Drs. Rusli Ishak & Drs. Bahroin Suryantara",
        publisher: "Karya Toha Putra",
        year: 2006,
        category: "islamic",

        cover: "./assets/img/books/covers/4/ski.webp",

        isbn: null,
        pages: 72,
        language: "Indonesian",

        description:
            "Buku ini berisi tentang Sejarah Perkembangan Kebudayaan Islam dimulai dari pra-Islam hingga zaman kerasulan Nabi. Disusun berdasarkan Kurikulum 2004 dan ditujukan untuk Madrasah Ibtidaiyah (SD) kelas 3, dibekali dengan materi evaluasi dan tugas.",

        gallery: [
            "./assets/img/books/covers/4/ski.webp",
            "./assets/img/books/details/ski/1.webp",
            "./assets/img/books/details/ski/2.webp"
        ],

        favorite: false
    },

    {
        id: 5,
        title: "Rangkuman Materi Penting Pintar Sains SD",
        author: "Tri Adjie Utama",
        publisher: "Bintang Indonesia",
        year: 2009,
        category: "education",

        cover: "./assets/img/books/covers/5/pintar-sains.webp",

        isbn: null,
        pages: 128,
        language: "Indonesian",

        description:
            "Buku ini disusun berdasarkan kurikulum yang berlaku. Format buku yang ideal, serta teknik penulisan yang runut dengan gaya bahasa yang mudah dimengerti untuk siswa kelas IV, V, dan VI dengan harapan siswa menjadi senang belajar.",

        gallery: [
            "./assets/img/books/covers/5/pintar-sains.webp",
            "./assets/img/books/details/pintar-sains/1.webp",
            "./assets/img/books/details/pintar-sains/2.webp"
        ],

        favorite: false
    },

    {
        id: 6,
        title: "Kursus Kilat 24 Jurus Word 2000",
        author: "Rijanto TOSIN",
        publisher: "Dinastindo",
        year: 1999,
        category: "technology",

        cover: "./assets/img/books/covers/6/24-jurus-word2000.webp",

        isbn: "979-552-352-X",
        pages: 163,
        language: "Indonesian",

        description:
            "Buku yang berisi tutorial dan materi pembelajaran Microsoft Word 2000.",

        gallery: [
            "./assets/img/books/covers/6/24-jurus-word2000.webp",
            "./assets/img/books/details/24-jurus-word2000/1.webp",
            "./assets/img/books/details/24-jurus-word2000/2.webp"
        ],

        favorite: false
    },

    {
        id: 7,
        title: "Became an Excellent Principal",
        author: "Dr. Fahruddin, M.Si",
        publisher: "Elex Media Komputindo",
        year: 2014,
        category: "education",

        cover: "./assets/img/books/covers/7/became-an-excellent-principal.webp",

        isbn: "978-602-02-3264-5",
        pages: 383,
        language: "Indonesian",

        description:
            'Dalam buku ini terpapar pengalaman-pengalaman penulis ketika dipercaya oleh Chairul Tanjung mengelola SMA UCTF. Penulis tidak memiliki pengalaman sama sekali dalam mengelola sekolah yang terpaksa dipelajarinya secara autodidak dan dilakukan dari nol dengan kerja sama tim yang saling bersinergis. Setiap hari, penulis berpikir keras untuk melakukan suatu terobosan "apa lagi yang harus saya lakukan untuk sekolah ini?". Cita cita luhur dari CTF untuk jangka panjang adalah sebagai pilot dan project dan membangun citra "orang miskin pun bisa berprestasi", dan menjadikan SMA UCTF sebagai sekolah unggulan yang diperhitungkan baik tingkat nasional maupun tingkat internasional.',

        gallery: [
            "./assets/img/books/covers/7/became-an-excellent-principal.webp",
            "./assets/img/books/details/became-an-excellent-principal/1.webp",
            "./assets/img/books/details/became-an-excellent-principal/2.webp"
        ],

        favorite: false
    },

    {
        id: 8,
        title: "Chairul Tanjung si Anak Singkong",
        author: "Tjahja Gunawan Diredja",
        publisher: "Kompas Media Nusantara",
        year: 2012,
        category: "biography",

        cover: "./assets/img/books/covers/8/chairul-tanjung-si-anak-singkong.webp",

        isbn: "978-979-709-650-2",
        pages: 382,
        language: "Indonesian",

        description:
            'Buku ini membagikan kisah dan cerita dari Chairul Tanjung tentang lika-liku, pengalaman, serta makna dan nilai-nilai kehidupan yang beliau pegang mulai dari kecil sampai hari ini menjadi pemimpin.',

        gallery: [
            "./assets/img/books/covers/8/chairul-tanjung-si-anak-singkong.webp",
            "./assets/img/books/details/chairul-tanjung-si-anak-singkong/1.webp",
            "./assets/img/books/details/chairul-tanjung-si-anak-singkong/2.webp"
        ],

        favorite: false
    },

    {
        id: 9,
        title: "1500 Peribahasa Indonesia dan Inggris",
        author: "R. Wahyu Nugroho",
        publisher: "Kompas Media Nusantara",
        year: 2004,
        category: "education",

        cover: "./assets/img/books/covers/9/1500-peribahasa-indonesia-inggris.webp",

        isbn: null,
        pages: 188,
        language: "Indonesian",

        description:
            'Buku ini sangat penting bagi pelajar maupun masyarakat umum guna menambah atau memperbanyak perbendaharaan kata bahasa Indonesia dan bahasa Inggris. juga disertai kamus untuk memahami kata-kata dalam peribahasa yang jarang sekali dijumpai dalam percakapan sehari-hari.',

        gallery: [
            "./assets/img/books/covers/9/1500-peribahasa-indonesia-inggris.webp",
            "./assets/img/books/details/1500-peribahasa-indonesia-inggris/1.webp",
            "./assets/img/books/details/1500-peribahasa-indonesia-inggris/2.webp"
        ],

        favorite: false
    },

    {
        id: 10,
        title: "Pintar Matematika Untuk SD",
        author: "Tri Adjie Utama",
        publisher: "Bintang Indonesia",
        year: null,
        category: "education",

        cover: "./assets/img/books/covers/10/pintar-matematika-sd.webp",

        isbn: null,
        pages: 128,
        language: "Indonesian",

        description:
            'Buku ini berisi kumpulan rumus-rumus Matematika secara lengkap untuk siswa-siswi SD kelas 4, 5, dan 6, dilengkapi dengan teori singkat dan jelas, soal dan pembahasannya.',

        gallery: [
            "./assets/img/books/covers/10/pintar-matematika-sd.webp",
            "./assets/img/books/details/pintar-matematika-sd/1.webp",
            "./assets/img/books/details/pintar-matematika-sd/2.webp"
        ],

        favorite: false
    },

    {
        id: 11,
        title: "Buku Pintar Sukses Belajar",
        author: "Drs. Budiono",
        publisher: "Bintang Indonesia",
        year: null,
        category: "education",

        cover: "./assets/img/books/covers/11/buku-pintar-sukses-belajar.webp",

        isbn: null,
        pages: 128,
        language: "Indonesian",

        description:
            'Materi yang disajikan dalam buku ini merupakan rangkuman materi-materi dari berbagai bidang studi seperti PPKN (Pendidikan Pancasila dan Kewarganegaraan), IPA (Ilmu Pengetahuan Alam), Pendidikan Agama, Bahasa Indonesia, Bahasa Inggris, IPS (Ilmu Pengetahuan Sosial), Pramuka, Matematika, dan Pengetahuan Umum menyangkut serba-serbi olahraga, PBB (Perserikatan Bangsa-Bangsa), serta informasi penting tentang ke-Indonesia-an. Ditambah lagi dengan kepanjangan dari berbagai singkatan yang sudah populer dalam masyarakat.',

        gallery: [
            "./assets/img/books/covers/11/buku-pintar-sukses-belajar.webp",
            "./assets/img/books/details/buku-pintar-sukses-belajar/1.webp",
            "./assets/img/books/details/buku-pintar-sukses-belajar/2.webp"
        ],

        favorite: false
    },

    {
        id: 12,
        title: "Penuntun Do'a dan Zikir Untuk Anak",
        author: "Ust. Hanafi",
        publisher: "Bintang Indonesia",
        year: null,
        category: "islamic",

        cover: "./assets/img/books/covers/12/penuntun-doa-zikir-anak.webp",

        isbn: null,
        pages: 96,
        language: "Indonesian",

        description:
            'Buku ini disusun untuk memberikan acuan bagi para pembaca untuk berdoa kepada Allah. Mengingat posisi doa sangat penting dalam kehidupan sehari-hari, baik dalam lingkup pribadi, keluarga, maupun masyarakat secara umum. Allah sendiri menegaskan bahwa "Berdoalah kamu, pasti akan Aku kabulkan". Ini menunjukkan kasih sayang Allah kepada hamba-Nya yang selalu mengharapkan pertolongan dari-Nya.',

        gallery: [
            "./assets/img/books/covers/12/penuntun-doa-zikir-anak.webp",
            "./assets/img/books/details/penuntun-doa-zikir-anak/1.webp",
            "./assets/img/books/details/penuntun-doa-zikir-anak/2.webp"
        ],

        favorite: false
    },

    {
        id: 13,
        title: "Filsafat Pancasila Secara Ilmiah dan Aplikatif",
        author: "Prof. Drs. Sunarjo Wreksosuhardjo",
        publisher: "ANDI",
        year: 2004,
        category: "education",

        cover: "./assets/img/books/covers/13/filsafat-pancasila-secara-ilmiah-aplikatif.webp",

        isbn: "979-731-360-3",
        pages: 74,
        language: "Indonesian",

        description:
            'Dari berbagai pokok bahasan dalam perkuliahan Pendidikan Pancasila, pokok bahasan mengenai "Landasan dan Tujuan Pendidikan Pancasila" dan "Pancasila sebagai Sistem Filsafat" adalah dua pokok bahasan yang tidak mudah, padahal dua pokok ini mendasari pokok-pokok bahasan yang lain, seperti "Pancasila sebagai Paradigma Kehidupan dalam Bermasyarakat, Berbangsa dan Bernegara". Dua pokok bahasan ini dibahasa secara ilmiah dan aplikatif di dalam buku ini.',

        gallery: [
            "./assets/img/books/covers/13/filsafat-pancasila-secara-ilmiah-aplikatif.webp",
            "./assets/img/books/details/filsafat-pancasila-secara-ilmiah-aplikatif/1.webp",
            "./assets/img/books/details/filsafat-pancasila-secara-ilmiah-aplikatif/2.webp"
        ],

        favorite: false
    },

    {
        id: 14,
        title: "Penuntun Shalat Tarawih dan Shalat Ied",
        author: "Ust. Hanafi",
        publisher: "TB. Ronny Saputra",
        year: null,
        category: "islamic",

        cover: "./assets/img/books/covers/14/penuntun-shalat-tarawih-ied.webp",

        isbn: null,
        pages: 24,
        language: "Indonesian",

        description:
            'Buku ini disusun untuk memberikan acuan bagi para pembaca agar lebih mudah mengerjakan shalat sunah tarawih pada bulan Ramadhan dan shalat Id. Mengingat nilai ibadah yang sangat tinggi pada bulan Ramadhan, maka shalat tarawih yang merupakan salah satu bentuk ibadah sunnah dikerjakan sebagai ungkapan kesyukuran kepada Allah. Dalam buku ini juga disertai dengan doa-doa utama yang cocok diamalkan dan diwiridkan pada bulan ramadhan untuk mewujudkan ramadhan sebagai bulan yang penuh dengan pengampunan dan bulan yang dilipatgandakan pahala ibadah seorang hamba yang beriman.',

        gallery: [
            "./assets/img/books/covers/14/penuntun-shalat-tarawih-ied.webp",
            "./assets/img/books/details/penuntun-shalat-tarawih-ied/1.webp",
            "./assets/img/books/details/penuntun-shalat-tarawih-ied/2.webp"
        ],

        favorite: false
    },

    {
        id: 15,
        title: "The Magic of Mathematic",
        author: "Yudi Pranata",
        publisher: null,
        year: 2014,
        category: "general",

        cover: "./assets/img/books/covers/15/the-magic-of-mathematic.webp",

        isbn: null,
        pages: 37,
        language: "Indonesian",

        description:
            'Dalam buku ini terdapat 10 game atau permainan matematika, selain itu dilampirkan pengetahuan umum seperti data Negara di Dunia lengkap dengan ibukota dan mata uangnya, kemudian lampiran seperti 100 orang yang paling berpengaruh di dunia versi Michael H. Heart, dan lain-lain.',

        gallery: [
            "./assets/img/books/covers/15/the-magic-of-mathematic.webp",
            "./assets/img/books/details/the-magic-of-mathematic/1.webp",
            "./assets/img/books/details/the-magic-of-mathematic/2.webp"
        ],

        favorite: false
    },

    {
        id: 16,
        title: "Learning English Effectivelly 4",
        author: "Firmus Mo'a Pasar",
        publisher: "Kesaint Blanc",
        year: 2001,
        category: "education",

        cover: "./assets/img/books/covers/16/learning-english-effectivelly-4.webp",

        isbn: "979-583-174-1",
        pages: 281,
        language: "Indonesian - English",

        description:
            'Buku ini disusun secara sistematis dengan kronologi penjelasan yang teratur, terarah dan saling melengkapi dengan menitikberatkan pada keseimbangan antara grammar dan conversation. Di samping itu, buku ini dilengkapi dengan Conversation Practice yang dapat dipraktekkan pada kehidupan sehari-hari. Buku ini sangat berguna bagi para pelajar dan para pengajar bahasa Inggris.',

        gallery: [
            "./assets/img/books/covers/16/learning-english-effectivelly-4.webp",
            "./assets/img/books/details/learning-english-effectivelly-4/1.webp",
            "./assets/img/books/details/learning-english-effectivelly-4/2.webp"
        ],

        favorite: false
    },

    {
        id: 17,
        title: "The Master Rahasia Sulap Modern",
        author: "Amongraga",
        publisher: "Bintang Indonesia",
        year: null,
        category: "general",

        cover: "./assets/img/books/covers/17/the-master-rahasia-sulap-modern.webp",

        isbn: null,
        pages: 96,
        language: "Indonesian",

        description:
            'Buku ini berisi berbagai macam trik sulap modern sederhana yang dilengkapi dengan gambar tanpa warna.',

        gallery: [
            "./assets/img/books/covers/17/the-master-rahasia-sulap-modern.webp",
            "./assets/img/books/details/the-master-rahasia-sulap-modern/1.webp",
            "./assets/img/books/details/the-master-rahasia-sulap-modern/2.webp"
        ],

        favorite: false
    },

    {
        id: 18,
        title: "Naruto Vol. 66",
        author: "Masashi Kishimoto",
        publisher: "Elex Media Komputindo",
        year: 2014,
        category: "comic",

        cover: "./assets/img/books/covers/18/naruto-vol-66.webp",

        isbn: "978-602-02-5091-5",
        pages: 184,
        language: "Indonesian",

        description:
            'Komik Naruto Volume 66 - Untuk melindungi teman-temannya dari kekuatan besar Madara dan kawan-kawan, Naruto mengerahkan kekuatan cakra Kyuubi. Tapi, daya penghancur Juubi yang dahsyat terus mendesak tentara gabungan shinobi. Saat mereka sedang terdesak, bantuan terkuat akhirnya tiba di medan perang!.',

        gallery: [
            "./assets/img/books/covers/18/naruto-vol-66.webp",
            "./assets/img/books/details/naruto-vol-66/1.webp",
            "./assets/img/books/details/naruto-vol-66/2.webp"
        ],

        favorite: false
    },

    {
        id: 19,
        title: "Naruto Vol. 67",
        author: "Masashi Kishimoto",
        publisher: "Elex Media Komputindo",
        year: 2014,
        category: "comic",

        cover: "./assets/img/books/covers/19/naruto-vol-67.webp",

        isbn: "978-602-02-5521-7",
        pages: 185,
        language: "Indonesian",

        description:
            'Komik Naruto Volume 67 - Obito akhirnya berubah menjadi jinchuuriki Juubi. Kekuatan yang berasal dari bijuu tersebut begitu dahsyat sampai berhasil menghancurkan kekkai! Saat semua dilanda kecemasan, kemampuan edo tensei pada hokage memperlihatkan kegunaannya. Naruto dan Sasuke pun berusaha mengerahkan serangan balik, tapi...',

        gallery: [
            "./assets/img/books/covers/19/naruto-vol-67.webp",
            "./assets/img/books/details/naruto-vol-67/1.webp",
            "./assets/img/books/details/naruto-vol-67/2.webp"
        ],

        favorite: false
    },

    {
        id: 20,
        title: "Naruto Vol. 72",
        author: "Masashi Kishimoto",
        publisher: "Elex Media Komputindo",
        year: 2016,
        category: "comic",

        cover: "./assets/img/books/covers/20/naruto-vol-72.webp",

        isbn: "978-602-02-8596-2",
        pages: 182,
        language: "Indonesian",

        description:
            'Komik Naruto Volume 72 - Kaguya berhasil disegel dan perang besar pun berakhir. Namun, Sasuke memulai pemberontakan! Demi menyampaikan perasaan mereka yang selalu bertentangan, Naruto dan Sasuke pun saling berhadapan, Inilah akhir pertarungan yang mempertaruhkan segalanya di antara dua orang pahlawan!.',

        gallery: [
            "./assets/img/books/covers/20/naruto-vol-72.webp",
            "./assets/img/books/details/naruto-vol-72/1.webp",
            "./assets/img/books/details/naruto-vol-72/2.webp"
        ],

        favorite: false
    },

]

///// MAP BOOKS CARD
const booksCardWrapper = document.querySelector('.books-card-wrapper');

function renderBooks(bookList) {

    booksCardWrapper.innerHTML = bookList.map( (book) => {

        return `
        
            <article class="book-card-item bg-white shadow-xs border border-slate-200 rounded-xl overflow-hidden dark:bg-[#1f1f1f] dark:border-[#282828]" data-book-id="${book.id}">

                <div class="book-cover relative group">

                    <img src="${book.cover}" alt="${book.title}" class="w-full">

                    <div class="book-cover-overlay flex justify-center items-center absolute opacity-0 pointer-events-none inset-0 bg-black/50 group-hover:opacity-100 group-hover:pointer-events-auto group transition-all duration-400">

                        <button type="button" class="detail-btn bg-emerald-600 hover:bg-emerald-700 hover:text-white rounded-md px-5 py-2.5 text-white transition-all duration-200 hover:shadow-lg text-main translate-y-1.25 group-hover:translate-y-0 cursor-pointer">See detail</button>

                    </div>

                </div>
                        
                <div class="book-info flex flex-col py-5 px-3.5">

                    <div class="flex justify-between items-center mb-2">

                        <small class="categori bg-emerald-200 py-1.5 px-3 rounded-md text-emerald-700 text-xs w-min capitalize dark:bg-emerald-800 dark:text-emerald-300">${book.category}</small>

                        <button type="button" title="${book.favorite ? 'Remove from favorites' : 'Add to favorites'}" class="favorite-btn ${book.favorite ? 'favorite' : ''} h-min rounded-lg cursor-pointer group">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart group-hover:fill-pink-600 group-hover:stroke-pink-600 dark:stroke-slate-200">
                                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                            </svg>

                        </button>
                                    
                    </div>
                            
                    <div class="flex flex-col gap-1 mt-2">

                        <h3 class="font-bold text-books-title tracking-[-0.013em] leading-[1.3em] dark:text-slate-200">${book.title}</h3>


                        

                        <p class="text-main text-slate-500 dark:text-slate-400">${book.author}</p>

                        <p class="text-main text-slate-500 dark:text-slate-400">${book.year ?? "-"}</p>

                    </div>
                        
                </div>
                            
            </article>
        
        `;

    }).join('');

}

const categoriesDropdown = document.querySelector('#categories');
const sortDropdown = document.querySelector('#sort');
const result = document.querySelector('.result');
const searchBar = document.querySelector('.search-bar');
const resetBtn = document.querySelector('.reset-btn');
const sortBtns = document.querySelectorAll('.sort-by');

function updateBooks() {

    let workingBooks = books;

    ///// CATEGORY
    const bookCategory = categoriesDropdown.value;

    if( bookCategory !== "all" ) {

        workingBooks = books.filter( (book) => {            

            return book.category === bookCategory;

        });

    } else result.textContent = ``;

    ///// SEARCH
    const keyword = searchBar.value.trim();

    if( searchBar.value.length >= 1 ) resetBtn.classList.remove('hidden');
    else resetBtn.classList.add('hidden');

    const keywordLower = keyword.toLowerCase();

    workingBooks = workingBooks.filter( (book) => {

        return (book.title.toLowerCase().includes(keywordLower) || book.author.toLowerCase().includes(keywordLower));

    });

    ///// SORT
    workingBooks = sortBooks(workingBooks);
    renderBooks(workingBooks);

    if( keyword === "" && bookCategory === "all" ) {

        renderBooks(workingBooks);

        return result.textContent = ``;

    } 

    if( workingBooks.length > 0  || ( bookCategory !== "all" && keyword === "" ) ) {

        if( workingBooks.length === 1 ) {


            result.innerHTML = `<span class="font-bold text-books-title text-black dark:text-slate-200">${workingBooks.length} </span>book found`;

        } else {

            result.innerHTML = `<span class="font-bold text-books-title text-black dark:text-slate-200">${workingBooks.length} </span>books found`;

        }

    } else {

        result.innerHTML = `No search results found for "<span class="font-semibold text-black dark:text-slate-200">${keyword}</span>"`;

    }

}

///// FILTERED CATEGORY BOOKS
categoriesDropdown.addEventListener('change', () => {
    
    categories.forEach( (category) => {

        categoriesDropdown.value === category.dataset.category ? 
            category.classList.add('active') : category.classList.remove('active');

    });

    updateBooks();

});

///// SORTING BOOKS
sortDropdown.addEventListener('change', () => {
    
    updateBooks();
    updateSortBtnText();

});

///// PREVENT FORM DEFAULT
const form = document.querySelector('.search-form');

form.addEventListener('submit', (e) => e.preventDefault() );

///// SEARCH BOOKS
searchBar.addEventListener('input', () => updateBooks() );

///// BUTTON FORM RESET ACTION
resetBtn.addEventListener('click', () => {

    searchBar.value = "";

    updateBooks();

});

let sortDirection = "asc";

///// SORT BOOKS FUNCTION
function sortBooks(bookList) {

    const booksCopy = [...bookList];
    const sortBy = sortDropdown.value;

    if( sortBy === "title" ) {

        if( sortDirection === "asc" ) {
        
            booksCopy.sort( (a, b) => a.title.localeCompare(b.title) );
            
        }

        if( sortDirection === "desc" ) {

            booksCopy.sort( (a, b) => b.title.localeCompare(a.title) );
           
        }

    } else if ( sortBy === "author" ) {

        if( sortDirection === "asc" ) {
        
            booksCopy.sort( (a, b) => a.author.localeCompare(b.author) );
        }

        if( sortDirection === "desc" ) {

            booksCopy.sort( (a, b) => b.author.localeCompare(a.author) );

        }

    } else {

        booksCopy.sort( (a, b) => {

            if( a.year === null && b.year === null ) return 0;

            if( a.year === null ) return 1;

            if( b.year === null ) return -1;

            return sortDirection === "asc" ? a.year - b.year : b.year - a.year;

        });

    }  
    
    return booksCopy;

}

function updateSortBtnText() {

    const sortBy = sortDropdown.value;

    sortBtns.forEach( (sortBtn) => {

        const sortBtnDirection = sortBtn.dataset.direction;
        const textSort = sortBtn.querySelector('p');

        if( sortBy === "year" ) {
            
            textSort.textContent = sortBtnDirection === "asc" ? "Oldest" : "Newest";

        } else {

            textSort.textContent = sortBtnDirection === "asc" ? "A-Z" : "Z-A";

        }

    });

}

updateBooks(books);

///// HAMBURGER MENU ACTION

const hamburgerMenu = document.querySelector('#hamburger-menu');
const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', () => { 

    sidebar.classList.add('active');
    document.body.classList.add('no-scroll');
    overlay.classList.add('show');

});

// CLOSE THE SIDEBAR WHEN CLICKING OUTSIDE OF IT
overlay.addEventListener('click', () => {

    sidebar.classList.remove('active');
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('show');

});

///// SIDEBAR LINK MENU STATE 
const sidebarLinks = document.querySelectorAll('.sidebar-main-menu-link');
const sections = document.querySelectorAll('section[data-section]');
const sidebarCategoryMenu = document.querySelector('.sidebar-categories-menu');

sidebarLinks[0].classList.add('active');

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    sections.forEach( (section) => {

        if( section.dataset.section === "library" ) section.classList.add('view');

    });
    
});

sidebarLinks.forEach( sidebarLink => {

    sidebarLink.addEventListener('click', () => {

        ///// CONTROLLING SECTION DISPLAY
        const activeView = sidebarLink.dataset.view;

        sections.forEach( (section) => {

            const dataSection = section.dataset.section;
            
            if( dataSection === activeView ) {
                
                dataSection !== "library" ? 
                    sidebarCategoryMenu.classList.add('hidden') : sidebarCategoryMenu.classList.remove('hidden');
                
                section.classList.remove('hidden');

                window.scrollTo(0, 0);
                
                requestAnimationFrame( () => section.classList.add('view') );

            } else {

                section.classList.add('hidden');
                section.classList.remove('view');

            }

        });

        ///// CHANGE SIDEBAR MAIN LINKS STYLE WHEN CLICKED
        sidebarLinks.forEach( link => {

            link.classList.remove('active');

        });

        sidebarLink.classList.add('active');

        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
        overlay.classList.remove('show');

    });

});

///// CATEGORIES MENU SIDEBAR CLICK LOGIC
const categories = document.querySelectorAll('.sidebar-categories-menu-link');

categories.forEach( category => {

    category.addEventListener('click', () => {
        
        const currentCategory = category.dataset.category;

        categoriesDropdown.value = currentCategory;

        ///// CHANGE SIDEBAR CATEGORIES STYLE WHEN CLICKED
        categories.forEach( categoryLink => {

            categoryLink.classList.remove('active');

        });

        category.classList.add('active');

        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
        overlay.classList.remove('show');

        updateBooks();

    });

});

// CHANGE SORT BUTTON STYLE WHEN CLICKED
sortBtns[0].classList.add('active');

sortBtns.forEach( sortBtn => {

    sortBtn.addEventListener('click', () => {

        sortDirection = sortBtn.dataset.direction;

        sortBtns.forEach( sort => {

            sort.classList.remove('active');

        });

        sortBtn.classList.add('active');

        updateBooks();

    });

});

///// CARD BOOK CLICK ACTIONS
const modalBook = document.querySelector('.modal-book');
const cardWrappers = document.querySelectorAll('.card-wrapper');
const detailBookImgs = modalBook.querySelectorAll('.detail-gallery');
const imgZoomOverlay = document.querySelector('.img-zoom-overlay');
const zoomBook = document.querySelector('.zoom-book');
const bookOverlay = document.querySelector('.book-overlay');
const bookCards = document.querySelectorAll('.book-card-item');
const modalCloseBtn = document.querySelector('#modal-close-btn');
const favoriteCardWrapper = document.querySelector('.favorite-card-wrapper');
const totalBooks = document.querySelector('.total-books');
const totalCategories = document.querySelector('.total-categories');
const totalFavoritesNumber = document.querySelector('.total-favorites');

const toastNotif = document.querySelector('.toast-notif');
const toastNotifText = document.querySelector('.toast-notif p');
let toastTimeOut;            

let favoriteIds = [];

///// TOTAL BOOKS NUMBER & CATEGORIES
totalBooks.textContent = books.length;
totalCategories.textContent = categoriesDropdown.options.length - 1;

///// CHECK WHETHER LOCALSTORAGE ALREADY EXISTS OR NOT
const storedFavorites = localStorage.getItem('favoriteBooks');

storedFavorites !== null ? 
    favoriteIds = JSON.parse(storedFavorites) : favoriteIds = [];

///// SYNC BOOKS IN FAVORITES WITH LIBRARY
books.forEach( (book) => {

    favoriteIds.includes(book.id)  
        ? book.favorite = true : book.favorite = false;    

});

updateFavoriteCount();

///// EVENT DELEGATION OF BOOK CARD IN LIBRARY & FAVORITES
cardWrappers.forEach( (cardWrapper) => {

    cardWrapper.addEventListener('click', (e) => {

        ///// DETAIL BUTTON
        if( e.target.classList.contains('detail-btn') ) {

            const cardItem = e.target.closest('.book-card-item');

            modalBook.scrollTop = 0;

            const bookCardId = +cardItem.getAttribute('data-book-id');

            const bookFind = books.find( (book) => {

                if( book.id === bookCardId ) return book;

            });
            
            modalBook.classList.add('opacity-100');
            modalBook.classList.remove('pointer-events-none');
            
            ///// UPDATE MODAL DIALOG
            const detailCover = modalBook.querySelector('#detail-cover');
            const detailTitle = modalBook.querySelector('#detail-title');
            const detailAuthor = modalBook.querySelector('#detail-author');
            const detailPublisher = modalBook.querySelector('#detail-publisher');
            const detailCategory = modalBook.querySelector('#detail-category');
            const detailYear = modalBook.querySelector('#detail-year');
            const detailISBN = modalBook.querySelector('#detail-isbn');
            const detailPage = modalBook.querySelector('#detail-pages');
            const detailLanguage = modalBook.querySelector('#detail-language');
            const detailDescription = modalBook.querySelector('#detail-description');
            const detailGalleries = modalBook.querySelectorAll('.detail-gallery');

            detailCover.src = bookFind.cover;
            detailTitle.textContent = bookFind.title;
            detailAuthor.textContent = bookFind.author;
            detailPublisher.textContent = bookFind.publisher ?? "-";
            detailCategory.textContent = bookFind.category;
            detailYear.textContent = bookFind.year ?? "-";
            detailISBN.textContent = bookFind.isbn ?? "-";
            detailPage.textContent = bookFind.pages;
            detailLanguage.textContent = bookFind.language;
            detailDescription.textContent = bookFind.description;

            detailGalleries.forEach( (detailGallery, i) => {
            
                detailGallery.src = bookFind.gallery[i]; 
                detailGallery.alt = bookFind.title;

            });

            return;
        }

        ///// FAVORITE BUTTON
        const favoriteBtn = e.target.closest('.favorite-btn');

        if(!favoriteBtn) return;

        const bookCardItem = favoriteBtn.closest('.book-card-item');

        const cardID = +bookCardItem.dataset.bookId;

        const currentBook = books.find( (book) => {

            return book.id === cardID;

        });

        if(!currentBook) return;

        currentBook.favorite = !currentBook.favorite;

        if( !favoriteIds.includes(currentBook.id) ) {

            favoriteIds.push(currentBook.id);

        } else {

            favoriteIds = favoriteIds.filter( (favoriteId) => {

                return favoriteId !== currentBook.id; 

            });

        }
        
        currentBook.favorite ? 
            toastNotifText.textContent = 'Successfully added to favorites!' : toastNotifText.textContent = 'Successfully removed from favorites!';

        updateFavoriteCount();
        saveFavorites();
        updateBooks();
        renderFavorites();
        
        toastNotif.classList.add('show');
            
        clearTimeout(toastTimeOut);
        toastTimeOut = setTimeout( () => toastNotif.classList.remove('show'), 2500);

    });

});

///// UPDATE TOTAL NUMBER OF FAVORITE BOOKS
function updateFavoriteCount() {
    
    totalFavoritesNumber.textContent = favoriteIds.length;

}

///// RENDER FAVORITE BOOK
function renderFavorites() {
    
    const favoriteBookLists = favoriteIds.map( (favoriteId) => {

        return books.find( (book) => {
            
            return book.id === favoriteId;

        });

    });

    if( favoriteBookLists.length >= 1 ) {

        favoriteCardWrapper.innerHTML = favoriteBookLists.map( (favoriteBookList) => {

            return `
        
                <article class="book-card-item bg-white shadow-xs border border-slate-200 rounded-xl overflow-hidden dark:bg-[#1f1f1f] dark:border-[#282828]" data-book-id="${favoriteBookList.id}">

                    <div class="book-cover relative group">

                        <img src="${favoriteBookList.cover}" alt="${favoriteBookList.title}" class="w-full">

                        <div class="book-cover-overlay flex justify-center items-center absolute opacity-0 pointer-events-none inset-0 bg-black/50 group-hover:opacity-100 group-hover:pointer-events-auto group transition-all duration-400">

                                        
                            <button type="button" class="detail-btn bg-emerald-600 hover:bg-emerald-700 hover:text-white rounded-md px-5 py-2.5 text-white transition-all duration-200 hover:shadow-lg text-main translate-y-1.25 group-hover:translate-y-0 cursor-pointer">See detail</button>

                        </div>

                    </div>
                            
                    <div class="book-info flex flex-col py-5 px-3.5">

                        <div class="flex justify-between items-center mb-2">

                            <small class="categori bg-emerald-200 py-1.5 px-3 rounded-md text-emerald-700 text-xs w-min capitalize dark:bg-emerald-800 dark:text-emerald-300">${favoriteBookList.category}</small>

                            <button type="button" title="${favoriteBookList.favorite ? 'Remove from favorites' : 'Add to favorites'}" class="favorite-btn ${favoriteBookList.favorite ? 'favorite' : ''} h-min rounded-lg cursor-pointer group">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart group-hover:fill-pink-600 group-hover:stroke-pink-600">
                                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                                </svg>

                            </button>
                                        
                        </div>
                                
                        <div class="flex flex-col gap-1 mt-2">

                            <h3 class="font-bold text-books-title tracking-[-0.013em] leading-[1.3em] dark:text-slate-200">${favoriteBookList.title}</h3>

                            <p class="text-main text-slate-500 dark:text-slate-400">${favoriteBookList.author}</p>

                            <p class="text-main text-slate-500 dark:text-slate-400">${favoriteBookList.year ?? "-"}</p>

                        </div>
                            
                    </div>
                                
                </article>
        
            `;

        }).join('');

    } else {

        favoriteCardWrapper.innerHTML = `<p class="text-slate-500 text-lg font-semibold dark:text-slate-400">No favorite books yet.</p>`;

    }

}

///// SAVE FAVORITE BOOK IN LOCALSTORAGE & CONVERT TO JSON
function saveFavorites() {

    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteIds));

}

updateBooks();
renderFavorites();

///// ZOOM BOOK IMAGE IN BOOK MODAL
detailBookImgs.forEach( (detailBookImg) => {

    detailBookImg.addEventListener('click', () => {
       
        imgZoomOverlay.classList.add('show');

        zoomBook.src = detailBookImg.src;
        zoomBook.alt = detailBookImg.alt;

    });

});

///// CLOSE BOOK IMAGE IN BOOK MODAL WHEN CLICK IN OVERLAY
imgZoomOverlay.addEventListener('click', (e) => {

    if( e.target !== zoomBook ) imgZoomOverlay.classList.remove('show'); 

});

///// CLOSE MODAL FUNCTION
function closeModal() {

    modalBook.classList.remove('opacity-100');
    modalBook.classList.add('pointer-events-none');

}

///// CLOSE MODAL BOOK BY BUTTON
modalCloseBtn.addEventListener('click', closeModal);

///// CLOSE MODAL BOOK WHEN CLICK ON OVERLAY
modalBook.addEventListener('click', (e) => {

    if( e.target === modalBook ) closeModal();

});

///// ZOOM IMAGE GALLERY ACTION
const galleriesItem = document.querySelectorAll('.gallery-item');
const zoomImgGallery = document.querySelector('.zoom-img-gallery'); 
const imageGallery = zoomImgGallery.querySelector('img');

galleriesItem.forEach( (galleryItem, i) => {

    const imgGallery = galleryItem.querySelector('img');

    imgGallery.addEventListener('click', () => {

        zoomImgGallery.classList.add('zoom');
        
        imageGallery.src = `assets/img/gallery/zoom-${i + 1}.webp`;
        imageGallery.alt = `Gallery ${i + 1}`;

    });

});

///// CLOSE ZOOM GALLERY OVERLAY WHEN CLICK IN OVERLAY AREA
zoomImgGallery.addEventListener('click', (e) => {

    const imgGallery = zoomImgGallery.querySelector('img');

    if( e.target !== imgGallery ) zoomImgGallery.classList.remove('zoom');

});

///// THEME TOGGLE
const savedTheme = localStorage.getItem('theme');
const themeToggle = document.querySelector('#theme-toggle');

///// CHECK IF DARK THEME IS NOT ACTIVE
if( savedTheme === 'dark' ) {

    document.body.classList.add('dark');
    themeToggle.checked = true;

} else {

    document.body.classList.remove('dark');
    themeToggle.checked = false;

}

///// CHANGE THEME WHEN TOGGLE IS CHANGED
themeToggle.addEventListener('change', () => {

    document.body.classList.toggle('dark', themeToggle.checked);

    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');

});