const officialSite = "https://nctb.gov.bd/";

const commonPrimarySubjects = [
  "বাংলা",
  "English",
  "গণিত"
];

const commonUpperPrimarySubjects = [
  ...commonPrimarySubjects,
  "প্রাথমিক বিজ্ঞান",
  "বাংলাদেশ ও বিশ্বপরিচয়",
  "ধর্ম ও নৈতিক শিক্ষা"
];

const commonSecondarySubjects = [
  "বাংলা সাহিত্য",
  "বাংলা ব্যাকরণ ও নির্মিতি",
  "English",
  "English Grammar",
  "গণিত",
  "তথ্য ও যোগাযোগ প্রযুক্তি",
  "বাংলাদেশ ও বিশ্বপরিচয়",
  "ধর্ম ও নৈতিক শিক্ষা"
];

const groupNames = {
  common: "সাধারণ বিষয়",
  science: "বিজ্ঞান বিভাগ",
  humanities: "মানবিক বিভাগ",
  business: "ব্যবসায় শিক্ষা বিভাগ"
};

const sscArchive = "https://nctb.gov.bd/pages/static-pages/6922dd34933eb65569e13edb";
const hscArchive = "https://nctb.gov.bd/pages/static-pages/6922de61933eb65569e1a40b";

const sscBooks = [
  { subject: "বাংলা সাহিত্য", group: "common", file: "1EGkrQmjtjSZY6d7XzqI9d68tBzh-xz2N" },
  { subject: "বাংলা সহপাঠ", group: "common", file: "1opKsdJb4CC47li9wZctzhWvV8l_vb7OC" },
  { subject: "বাংলা ভাষার ব্যাকরণ", group: "common", file: "1r7jl2Kya-HjGhgqe4MdKbHd6r6aFpCl5" },
  { subject: "English for Today", group: "common", file: "1tsq23Q7BNljxPMcW9LtZvaaw4rgoMAyA" },
  { subject: "English Grammar and Composition", group: "common", file: "1VjWKIcw8UFkJyTzGpwPpEdK1dLvzcDr8" },
  { subject: "গণিত", group: "common", file: "1e4F5mXS0csR-SvOkEWPcuJF2CvimRGSh" },
  { subject: "তথ্য ও যোগাযোগ প্রযুক্তি", group: "common", file: "1Pe9SViRX6eoFRK_D9yoghjkib0aXKqDb" },
  { subject: "বিজ্ঞান", group: "common", file: "1JlmZ6Rgh0kGZhw07nai9GQM7wlXfPEI3" },
  { subject: "বাংলাদেশ ও বিশ্বপরিচয়", group: "common", file: "1AIlAdAl7-mwfJXnKO6ZAqzhldclg-kUT" },
  { subject: "ক্যারিয়ার এডুকেশন", group: "common", file: "1anfFWos1PDAKjkgyBe9XfOaowSP-Xy5N" },
  { subject: "শারীরিক শিক্ষা, স্বাস্থ্য বিজ্ঞান ও খেলাধুলা", group: "common", file: "18e2JlIXvtosz24FachEtJnYge1XvsF1P" },
  { subject: "পদার্থবিজ্ঞান", group: "science", file: "1R9UtZnrU36EwbjEh1ewEstDvTPVCwMUy" },
  { subject: "রসায়ন", group: "science", file: "1fD4Nh4AQjS7GGGGRHsTmGN8Jfq8tXqPM" },
  { subject: "জীববিজ্ঞান", group: "science", file: "10Dpx7644QAL9bEzaK4Vapjvbmr2I7DIx" },
  { subject: "উচ্চতর গণিত", group: "science", file: "1i2lw0hGAy6Lkh_A6KExJDGOjiG2MsEZE" },
  { subject: "ভূগোল ও পরিবেশ", group: "humanities", file: "1ZLGtRHVRFjPzN7FAvmVrSVmJ8kc5_vdq" },
  { subject: "অর্থনীতি", group: "humanities", file: "1cuurvGHxFCmjN6LHTy8kfv6JfpiZhV6P" },
  { subject: "পৌরনীতি ও নাগরিকতা", group: "humanities", file: "1h_rRkIsU8A3WKNSjs201u870QjkgUkFE" },
  { subject: "হিসাববিজ্ঞান", group: "business", file: "16dCCr9Bb7h4lhyuuYlmHtcCv9FFob5zU" },
  { subject: "ফিন্যান্স ও ব্যাংকিং", group: "business", file: "1Yw6gEH2zMaPLGnK6VbdgPVzqt-p0gvvE" },
  { subject: "ব্যবসায় উদ্যোগ", group: "business", file: "1QxwzRVO5h8FC-BAshw9oFFOmWSj44jHq" },
  { subject: "ইসলাম ও নৈতিক শিক্ষা", group: "common", file: "1rv9S0p_S8JMv4iZkyjEYLpxqzykpYPnN" },
  { subject: "হিন্দু ধর্ম ও নৈতিক শিক্ষা", group: "common", file: "14MKK9v3e6Baf0DxuAjY38dToQPiVrMqG" },
  { subject: "বৌদ্ধধর্ম ও নৈতিক শিক্ষা", group: "common", file: "1yvASZUQCdkY4l5RvS4LAr7aX1cLD-7O5" },
  { subject: "খ্রিষ্টধর্ম ও নৈতিক শিক্ষা", group: "common", file: "1ww7aRcOnGDukayednoYCrRrV7glXugzq" },
  { subject: "বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা", group: "humanities", file: "1qWV0SaMwpZH1xiso04KAPt2v9EDyyiqX" },
  { subject: "কৃষিশিক্ষা", group: "common", file: "1pRMMK9QSVCVznl2zE0g2sL6rp8ijYciD" },
  { subject: "গার্হস্থ্য বিজ্ঞান", group: "common", file: "1uuFBAm8ua5d-sobYgfeZwPNCm_Uqfwpu" },
  { subject: "চারু ও কারুকলা", group: "common", file: "1w83kQnLyBTCC8ABYnn376W1nbX2iDvmQ" }
].map((book) => ({
  ...book,
  classId: "ssc",
  className: "SSC · ৯ম–১০ম",
  groupName: groupNames[book.group],
  year: "NCTB আর্কাইভ · ২০২২",
  sourceUrl: sscArchive,
  url: `https://drive.google.com/file/d/${book.file}/view`
}));

const hscBooks = [
  { subject: "সাহিত্যপাঠ", file: "1srPOlSfVZl9RMd3qlAT-hW3Pb-R8Ex7k" },
  { subject: "সহপাঠ", file: "1CuetUIJnTx8ljJ9KT-jhwhwDiiZjfDtn" },
  { subject: "English for Today", file: "1ObslLPmaF3w_td-eW4uh_t9Vg-sqOBnH" },
  { subject: "তথ্য ও যোগাযোগ প্রযুক্তি", file: "19f1pFirqOmxDhb1po9an8TMCRatvo7Su" },
  { subject: "তথ্য ও যোগাযোগ প্রযুক্তি (ইংলিশ ভার্সন)", file: "1Xyflfns0thpGaFlqCIHfurLvG_1JzHMj" }
].map((book) => ({
  ...book,
  classId: "hsc",
  className: "HSC · একাদশ–দ্বাদশ",
  group: "common",
  groupName: groupNames.common,
  year: "NCTB আর্কাইভ · ২০২১–২২",
  sourceUrl: hscArchive,
  url: `https://drive.google.com/file/d/${book.file}/view`
}));

const gradeNames = {
  1: "১ম শ্রেণি",
  2: "২য় শ্রেণি",
  3: "৩য় শ্রেণি",
  4: "৪র্থ শ্রেণি",
  5: "৫ম শ্রেণি",
  6: "৬ষ্ঠ শ্রেণি",
  7: "৭ম শ্রেণি",
  8: "৮ম শ্রেণি",
  9: "৯ম শ্রেণি",
  10: "১০ম শ্রেণি",
  hsc: "HSC · একাদশ–দ্বাদশ"
};

function createBook(classId, subject, group = "common") {
  return {
    classId: String(classId),
    className: gradeNames[classId],
    subject,
    group,
    groupName: groupNames[group]
  };
}

const books = [...sscBooks, ...hscBooks];

for (let grade = 1; grade <= 10; grade += 1) {
  if (grade >= 9) continue;
  let subjects;
  if (grade <= 2) {
    subjects = commonPrimarySubjects;
  } else if (grade <= 5) {
    subjects = commonUpperPrimarySubjects;
  } else if (grade <= 8) {
    subjects = [
      "বাংলা",
      "English",
      "গণিত",
      "বিজ্ঞান",
      "বাংলাদেশ ও বিশ্বপরিচয়",
      "তথ্য ও যোগাযোগ প্রযুক্তি",
      "কৃষিশিক্ষা",
      "গার্হস্থ্য বিজ্ঞান",
      "ধর্ম ও নৈতিক শিক্ষা"
    ];
  } else {
    subjects = commonSecondarySubjects;
  }

  subjects.forEach((subject) => books.push(createBook(grade, subject)));

}

const grid = document.querySelector("#resource-grid");
const searchInput = document.querySelector("#search-input");
const classFilter = document.querySelector("#class-filter");
const groupFilter = document.querySelector("#group-filter");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const pdfDialog = document.querySelector("#pdf-dialog");
const pdfFrame = document.querySelector("#pdf-frame");
const pdfTitle = document.querySelector("#pdf-title");
const pdfOpenOriginal = document.querySelector("#pdf-open-original");
const pdfClose = document.querySelector("#pdf-close");

function matchesClass(book, selectedClass) {
  if (selectedClass === "all") return true;
  if (selectedClass === "ssc") return book.classId === "ssc";
  if (selectedClass === "9" || selectedClass === "10") {
    return book.classId === selectedClass || book.classId === "ssc";
  }
  return book.classId === selectedClass;
}

function renderBooks() {
  const query = searchInput.value.trim().toLocaleLowerCase("bn");
  const selectedClass = classFilter.value;
  const selectedGroup = groupFilter.value;
  const filteredBooks = books.filter((book) => {
    const searchableText = `${book.subject} ${book.className} ${book.groupName}`.toLocaleLowerCase("bn");
    const matchesQuery = searchableText.includes(query);
    const matchesGroup = selectedGroup === "all" || book.group === selectedGroup;
    return matchesQuery && matchesGroup && matchesClass(book, selectedClass);
  });

  grid.replaceChildren(...filteredBooks.map((book) => {
    const article = document.createElement("article");
    article.className = "resource-card";

    const cardTop = document.createElement("div");
    cardTop.className = "card-top";

    const icon = document.createElement("span");
    icon.className = "resource-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "▤";

    const tag = document.createElement("span");
    tag.className = "resource-tag";
    tag.textContent = `${book.className} · ${book.groupName}`;
    cardTop.append(icon, tag);

    const title = document.createElement("h3");
    title.textContent = book.subject;

    const description = document.createElement("p");
    description.textContent = book.url
      ? `${book.className} · ${book.year} সংস্করণ`
      : `${book.className} এর ${book.subject} বই NCTB-র অফিসিয়াল সাইটে যাচাই করো।`;

    const link = book.url
      ? document.createElement("button")
      : document.createElement("a");
    link.className = "card-link";
    if (book.url) {
      link.type = "button";
      link.dataset.pdfUrl = book.url;
      link.dataset.previewUrl = book.url.replace(/\/view(?:\?.*)?$/, "/preview");
      link.dataset.bookTitle = `${book.subject} · ${book.className}`;
      link.append(document.createTextNode("সাইটে পড়ুন "));
    } else {
      link.href = officialSite;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.append(document.createTextNode("NCTB-তে বই খুঁজুন "));
    }

    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    link.append(arrow);

    article.append(cardTop, title, description);
    if (book.url) {
      const source = document.createElement("a");
      source.className = "card-source";
      source.href = book.sourceUrl;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "NCTB উৎস";
      article.append(link, source);
    } else {
      article.append(link);
    }
    return article;
  }));

  resultCount.textContent = `${filteredBooks.length}টি বিষয়`;
  emptyState.hidden = filteredBooks.length !== 0;
}

function closePdfReader() {
  pdfDialog.close();
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-preview-url]");
  if (!button) return;

  pdfTitle.textContent = button.dataset.bookTitle;
  pdfOpenOriginal.href = button.dataset.pdfUrl;
  pdfFrame.src = button.dataset.previewUrl;
  pdfDialog.showModal();
  pdfClose.focus();
});

pdfClose.addEventListener("click", closePdfReader);
pdfDialog.addEventListener("close", () => {
  pdfFrame.src = "about:blank";
});
pdfDialog.addEventListener("click", (event) => {
  if (event.target === pdfDialog) closePdfReader();
});

searchInput.addEventListener("input", renderBooks);
classFilter.addEventListener("change", renderBooks);
groupFilter.addEventListener("change", renderBooks);

renderBooks();
