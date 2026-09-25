import { Language } from '../context/LanguageContext';
import { Project, ExperienceItem, PublishingService, EditorialArticle, Testimonial } from '../types';
import {
  EXPERIENCES,
  PUBLISHING_SERVICES,
  EDITORIAL_ARTICLES,
  TESTIMONIALS,
} from './portfolioData';

export interface PageInfo {
  id: string;
  label: { vi: string; en: string };
  shortLabel: { vi: string; en: string };
  pageNum: string;
}

export const NAV_PAGES: PageInfo[] = [
  {
    id: 'trang-chu',
    label: { vi: 'Trang chủ', en: 'Home' },
    shortLabel: { vi: 'Trang chủ', en: 'Home' },
    pageNum: '01',
  },
  {
    id: 'du-an',
    label: { vi: 'Dự án', en: 'Projects' },
    shortLabel: { vi: 'Dự án', en: 'Projects' },
    pageNum: '02',
  },
  {
    id: 'gioi-thieu',
    label: { vi: 'Giới thiệu & Triết lý', en: 'About & Philosophy' },
    shortLabel: { vi: 'Giới thiệu', en: 'About' },
    pageNum: '03',
  },
  {
    id: 'kinh-nghiem',
    label: { vi: 'Kinh nghiệm & Dịch vụ', en: 'Experience & Services' },
    shortLabel: { vi: 'Kinh nghiệm', en: 'Experience' },
    pageNum: '04',
  },
  {
    id: 'lien-he',
    label: { vi: 'Liên hệ & Hợp tác', en: 'Contact & Inquiries' },
    shortLabel: { vi: 'Liên hệ', en: 'Contact' },
    pageNum: '05',
  },
];

export const UI_TEXT = {
  vi: {
    header: {
      name: 'Linh Đặng',
      title: 'Biên tập viên & Dịch giả',
      langToggleAria: 'Chuyển đổi ngôn ngữ Tiếng Việt / Tiếng Anh',
      currentViewing: 'Đang xem',
      copyEnglishLinkTooltip: 'Sao chép đường link tiếng Anh riêng (?lang=en) để gửi đối tác',
      copyEnglishLinkSuccess: 'Đã sao chép link tiếng Anh!',
      englishLinkShort: 'Link EN',
      partnerLinkDrawerTitle: 'Đường link tiếng Anh gửi đối tác',
      partnerLinkDrawerDesc: 'Tự động mở phiên bản tiếng Anh khi truy cập liên kết này.',
      copyBtn: 'Sao chép link',
    },
    hero: {
      chapters: [
        {
          id: 'du-an',
          title: 'Dự án',
          desc: 'Tuyển chọn ấn phẩm văn học dịch, phi hư cấu, triết học và mỹ thuật sách.',
          highlight: '65+ tác phẩm',
        },
        {
          id: 'gioi-thieu',
          title: 'Giới thiệu & Triết lý',
          desc: 'Hành trình 12 năm người làm bản thảo và các nguyên tắc đạo đức làm nghề.',
          highlight: 'Tiểu sử & Giá trị',
        },
        {
          id: 'kinh-nghiem',
          title: 'Kinh nghiệm & Dịch vụ',
          desc: 'Tiến trình công tác tại các nhà xuất bản và các gói thẩm định chuyên sâu.',
          highlight: 'Timeline & Dịch vụ',
        },
        {
          id: 'lien-he',
          title: 'Liên hệ & Hợp tác',
          desc: 'Hộp thư trao đổi dự án, gửi gắm bản thảo. Ưu tiên qua Email, kèm LinkedIn & Facebook.',
          highlight: 'contact@linhdang.id.vn',
        },
      ],
      viewContent: 'Xem nội dung',
    },
    profileBanner: {
      lastName: 'Họ (Last name)',
      firstName: 'Tên (First name)',
      preferredName: 'Tên thường gọi (Preferred name)',
      altText: 'Đặng Thị Tuyết Linh - Chân dung',
    },
    projects: {
      sectionBadge: 'MỤC LỤC TÁC PHẨM · 2013 – 2026',
      title: 'Dự án',
      desc: 'Tuyển tập các ấn phẩm tiêu biểu trong sự nghiệp biên tập bản thảo, dịch thuật văn học và phát triển xuất bản cùng các nhà xuất bản hàng đầu tại Việt Nam.',
      showing: 'HIỂN THỊ',
      ofPublications: 'ẤN PHẨM',
      categories: {
        all: 'Tất cả',
        transLit: 'Văn học dịch',
        nonFiction: 'Phi hư cấu & Triết học',
        artDesign: 'Nghệ thuật & Thiết kế',
        essays: 'Khảo cứu & Tản văn',
      },
      searchPlaceholder: 'Tìm tựa sách, tác giả, NXB...',
      allRoles: 'Mọi vai trò',
      viewDetails: 'Xem hồ sơ & trích đoạn',
      author: 'Tác giả',
      originalAuthor: 'Nguyên tác / Tác giả gốc',
      publisher: 'Đơn vị xuất bản',
      year: 'Năm xuất bản',
      empty: 'Không tìm thấy ấn phẩm phù hợp với bộ lọc hiện tại.',
      resetFilter: 'Đặt lại bộ lọc',
    },
    modal: {
      originalTitleLabel: 'Nguyên tác',
      authorLabel: 'Tác giả',
      publisherLabel: 'Đơn vị',
      tabDossier: 'Hồ sơ ấn phẩm',
      tabExcerpt: 'Đọc trích đoạn',
      summaryHeading: 'Tóm lược tác phẩm',
      editorialNoteHeading: 'Ghi chú biên tập & chuyên môn',
      colophonHeading: 'Thông số kỹ thuật & Xuất bản (Colophon)',
      pagesLabel: 'Số trang',
      pagesUnit: 'trang',
      undefinedSpec: 'Đang cập nhật',
      isbnLabel: 'Mã số chuẩn quốc tế ISBN',
      internalEdition: 'Ấn bản phát hành nội bộ',
      formatLabel: 'Quy cách gia công',
      defaultFormat: 'Bìa mềm tay gập tiêu chuẩn',
      yearLabel: 'Năm xuất bản',
      bilingualComparison: 'Đối chiếu song ngữ',
      vietnameseExcerpt: 'Trích đoạn tiếng Việt',
      vietnameseVersion: 'Bản dịch tiếng Việt',
      originalText: 'Nguyên bản',
      excerptDisclaimer: '*Trích đoạn được đăng tải với mục đích học thuật và giới thiệu chuyên môn biên tập.',
      copyrightNotice: 'Bản quyền tác phẩm thuộc về Tác giả & Đơn vị xuất bản liên kết.',
      inquireCollab: 'Trao đổi về dự án tương tự',
      closeModal: 'Đóng cửa sổ',
    },
    about: {
      sectionBadge: 'CHÂN DUNG & TRIẾT LÝ NGHỀ NGHIỆP',
      heading: 'Người đứng sau bóng con chữ và hành trình làm người gác cổng bản thảo.',
      bioP1: 'Tôi bắt đầu bước chân vào ngành xuất bản từ năm 2013, giữa giai đoạn thị trường sách Việt Nam đang chuyển mình mạnh mẽ về cả số lượng lẫn tiêu chuẩn mỹ thuật ấn phẩm. Trải qua hơn 12 năm làm việc với các bản thảo văn học, triết học, tản văn và sách nghệ thuật, tôi luôn giữ nguyên niềm say mê thuở ban đầu: sự hồi hộp khi mở một trang văn bản mới tinh chưa ai chạm bút.',
      bioP2: 'Đối với tôi, một cuốn sách không phải là một sản phẩm thương mại thông thường được sản xuất hàng loạt. Nó là một tác phẩm chứa đựng thời gian, trí tuệ và cả những trăn trở sâu xa của một kiếp người. Dù ở vai trò biên tập viên cấu trúc (developmental editor), người hiệu đính (copy editor) hay dịch giả trực tiếp, tôi đều xem bản thân là người cộng sự trung thành nhất của tác giả.',
      bioP3: 'Những năm tháng làm việc tại các nhà xuất bản hàng đầu như Nhã Nam, Kim Đồng, Omega Plus và NXB Trẻ đã cho tôi cơ hội trực tiếp tham gia hội chợ sách quốc tế Frankfurt, trao đổi bản quyền với các đại diện văn học khắp thế giới, và đặc biệt là rèn luyện sự khiêm nhường sâu sắc trước kho tàng tri thức nhân loại.',
      workingLanguagesLabel: 'NGÔN NGỮ LÀM VIỆC',
      workingLanguagesVal: 'Tiếng Việt (Bản ngữ) - Tiếng Anh - Tiếng Nhật',
      expertiseLabel: 'CHUYÊN MÔN NỔI BẬT',
      expertiseVal: 'Văn học, Nghệ thuật, Truyện tranh thanh thiếu niên, Truyện thiếu nhi',
      principlesBadge: 'NGUYÊN TẮC CỐT LÕI',
      principlesTitle: 'Ba nguyên tắc của người làm bản thảo',
      principles: [
        {
          num: 'I',
          title: 'Tôn trọng giọng điệu nguyên bản',
          desc: 'Mỗi tác giả mang một nhịp thở và cấu trúc tâm lý riêng. Nhiệm vụ của người biên tập không phải là gò tác phẩm vào thói quen ngôn ngữ của mình, mà là giúp giọng nói nguyên thủy của tác giả vang lên trong trẻo nhất.',
        },
        {
          num: 'II',
          title: 'Sự nhạy cảm với ngữ cảnh tiếng Việt',
          desc: 'Ngôn ngữ luôn vận động. Khi dịch hay hiệu đính, ta phải cân bằng giữa tính chính xác học thuật của từ gốc với nhạc tính, sức gợi cảm xúc và độ mềm mại tự nhiên của tiếng Việt đương đại.',
        },
        {
          num: 'III',
          title: 'Đạo đức của sự ẩn mình',
          desc: 'Người làm bản thảo giỏi nhất là người hoàn toàn vô hình trong mắt độc giả. Khi cuốn sách mở ra, chỉ có cuộc đối thoại thầm kín và trọn vẹn giữa người viết và người đọc.',
        },
      ],
      confidentialityNote: '*Tuân thủ nghiêm ngặt chuẩn mực bảo mật bản thảo & quyền tác giả.',
      testimonialsBadge: 'CHIA SẺ TỪ ĐỒNG NGHIỆP & TÁC GIẢ',
      testimonialsSubBadge: 'ĐÁNH GIÁ CHUYÊN MÔN',
    },
    experience: {
      sectionBadge: 'HÀNH TRÌNH NGHỀ NGHIỆP · 2013 – 2026',
      title: 'Kinh nghiệm & Dịch vụ chuyên môn',
      desc: 'Hơn một thập kỷ gắn bó với các nhà xuất bản hàng đầu và mạng lưới tác giả trong và ngoài nước, cung cấp các giải pháp hoàn thiện bản thảo chuẩn mực.',
      tabTimeline: 'Dấu mốc sự nghiệp',
      tabServices: 'Dịch vụ xuất bản',
      keyProjectsHeader: 'KẾT QUẢ & DỰ ÁN TRỌNG ĐIỂM:',
      scopeHeader: 'PHẠM VI CÔNG VIỆC THỰC HIỆN:',
      deliverableHeader: 'KẾT QUẢ BÀN GIAO:',
      requestService: 'Đặt lịch trao đổi / Tư vấn dịch vụ này',
      customSolutionTitle: 'Cần giải pháp biên tập hoặc ấn phẩm đặc thù?',
      customSolutionDesc: 'Đối với các dự án sách nghệ thuật giới hạn, kỷ yếu tổ chức hoặc công trình dịch thuật đa ngữ phức tạp, tôi luôn sẵn sàng xây dựng quy trình chuyên biệt.',
      customSolutionAction: 'Gửi yêu cầu trực tiếp qua Email',
    },
    editorialNotes: {
      stripLeft: 'TIỂU LUẬN & GHI CHÚ BIÊN TẬP',
      stripMiddle: 'Suy ngẫm về chữ nghĩa, dịch thuật và mỹ thuật trang in',
      stripRight: 'Giai phẩm chuyên khảo',
      sectionBadge: 'SUY NGẪM BIÊN TẬP · 2024 – 2026',
      title: 'Ghi chép bên lề bản thảo',
      desc: 'Những dòng suy tư về chữ nghĩa, nhịp điệu của câu văn tiếng Việt, nghệ thuật ẩn mình của người hiệu đính và vẻ đẹp xúc giác của trang sách in truyền thống.',
      curatedCount: '3 bài tiểu luận chọn lọc',
      readFullArticle: 'Đọc toàn văn tiểu luận',
      fontNormal: 'Cỡ chữ thường',
      fontLarge: 'Cỡ chữ phóng to',
      closeArticle: 'Đóng tiểu luận',
      authorCredit: 'Tiểu luận của Linh Đặng · Biên tập viên sách & Dịch giả',
      endColophon: 'HẾT TIỂU LUẬN · BẢO LƯU BẢN QUYỀN TRÍ TUỆ',
      citeNotice: 'Trích dẫn phi thương mại vui lòng ghi rõ nguồn tác giả Linh Đặng.',
    },
    contact: {
      sectionBadge: 'HỘP THƯ LÀM VIỆC & KẾT NỐI NGHỀ NGHIỆP',
      title: 'Liên hệ & Hợp tác',
      desc: 'Sẵn sàng tiếp nhận các đề cương bản thảo, dự án dịch thuật văn học, thẩm định xuất bản và cố vấn tủ sách tinh hoa.',
      priorityBadge: 'PHƯƠNG THỨC TIẾP NHẬN ƯU TIÊN',
      responseTime: 'Phản hồi trong 24 – 48 giờ làm việc',
      emailPriorityTitle: 'Ưu tiên trao đổi chuyên môn qua Email',
      emailPriorityDesc: 'Để đảm bảo toàn bộ tệp bản thảo, đề cương sách và các trao đổi thỏa thuận được bảo mật và theo dõi khoa học, tôi luôn ưu tiên thư điện tử làm kênh trao đổi chính thức.',
      primaryEmailLabel: 'Email nhận bản thảo & dự án',
      workEmailLabel: 'Hộp thư tên miền xuất bản cá nhân',
      copyEmail: 'Sao chép',
      copied: 'Đã sao chép!',
      openMailClient: 'Mở ứng dụng gửi thư',
      partnerLinkTitle: 'Đường link riêng cho đối tác quốc tế',
      partnerLinkDesc: 'Khi làm việc với các nhà xuất bản quốc tế, tác giả nước ngoài hoặc đại lý bản quyền, bạn chỉ cần gửi đường link dưới đây. Giao diện trang web sẽ tự động kích hoạt và hiển thị hoàn toàn bằng tiếng Anh.',
      partnerLinkDirectUrl: 'Đường dẫn tự động chọn tiếng Anh:',
      copyPartnerLink: 'Sao chép link tiếng Anh',
      copiedPartnerLink: 'Đã sao chép link tiếng Anh!',
      socialsTitle: 'MẠNG LƯỚI CHUYÊN MÔN',
      socialsDesc: 'Theo dõi các trao đổi về nghề làm sách và điểm sách chuyên sâu:',
      linkedinSub: 'Hồ sơ học thuật & Lịch sử biên tập',
      linkedinDesc: 'Kết nối mạng lưới xuất bản & đối tác quốc tế',
      facebookSub: 'Tủ sách cá nhân & Cập nhật ấn phẩm',
      facebookDesc: 'Góc nhìn đời thường của người làm con chữ',
      ndaTitle: 'Cam kết Bảo mật Tuyệt đối (NDA)',
      ndaDesc: 'Toàn bộ ý tưởng, bản thảo sơ khởi và văn bản đính kèm đều được bảo mật quyền tác giả nghiêm ngặt theo luật sở hữu trí tuệ.',
      responseCommitmentTitle: 'Thời gian phản hồi',
      responseCommitmentDesc: 'Các đề xuất hợp tác phù hợp chuyên môn sẽ nhận được báo cáo phản hồi hoặc lịch trao đổi trực tuyến trong vòng 48 giờ.',
      workLocationTitle: 'Địa bàn làm việc',
      workLocationDesc: 'Làm việc từ xa toàn cầu bằng ngôn ngữ Anh, Việt, và Nhật. Trao đổi trực tiếp tại TP.HCM.',
    },
    footer: {
      tagline: 'Biên tập viên sách, dịch giả văn học & phi hư cấu, chuyên gia tư vấn xuất bản độc lập tại Việt Nam.',
      backToTop: 'Về đầu trang',
      personalPositioningTitle: 'ĐỊNH VỊ CÁ NHÂN',
      personalPositioningDesc: 'TP. Hồ Chí Minh & Toàn cầu\nChuyên trách: Văn học, Nghệ thuật, Truyện tranh thanh thiếu niên, Truyện thiếu nhi',
      fastNavTitle: 'ĐIỀU HƯỚNG NHANH',
      navHome: 'Trang chủ',
      navProjects: 'Dự án',
      navAbout: 'Giới thiệu & Triết lý',
      navExperience: 'Kinh nghiệm & Dịch vụ',
      navEssays: 'Ghi chép & Tiểu luận',
      navContact: 'Liên hệ & Hợp tác',
      colophonTitle: 'GHI CHÚ MỸ THUẬT (COLOPHON)',
      colophonDesc: 'Trang web được thiết kế theo phong cách xuất bản tĩnh lặng: kiểu chữ Nunito, màu giấy ngà tự nhiên (#FBF9F5) và mực đen ấm (#1C1A17).',
      directContactTitle: 'LIÊN HỆ TRỰC TIẾP',
      backupEmailLabel: 'Dự phòng',
      copyright: '© 2013 – 2026 Linh Đặng (linhdang.id.vn). Bảo lưu mọi quyền xuất bản và trích dẫn.',
      copyrightTuyetLinh: 'Bản quyền © Tuyết Linh · Mọi quyền được bảo lưu.',
      subtitle: 'Biên tập viên · Dịch giả · Chuyên gia Xuất bản Việt Nam',
    },
    nav: {
      prevPage: 'Trang trước:',
      nextPage: 'Trang kế tiếp:',
      backHome: 'Về Trang chủ',
    },
  },
  en: {
    header: {
      name: 'Linh Dang',
      title: 'Book Editor & Literary Translator',
      langToggleAria: 'Switch language between Vietnamese and English',
      currentViewing: 'Viewing',
      copyEnglishLinkTooltip: 'Copy dedicated English link (?lang=en) for partners',
      copyEnglishLinkSuccess: 'English link copied!',
      englishLinkShort: 'EN Link',
      partnerLinkDrawerTitle: 'Dedicated English link for partners',
      partnerLinkDrawerDesc: 'Automatically loads English version when accessed.',
      copyBtn: 'Copy link',
    },
    hero: {
      chapters: [
        {
          id: 'du-an',
          title: 'Projects',
          desc: 'Curated portfolio of translated literature, everyday philosophy, and fine book design arts.',
          highlight: '65+ Publications',
        },
        {
          id: 'gioi-thieu',
          title: 'About & Philosophy',
          desc: 'Over 12 years of editorial craft, guardianship of prose, and publishing ethics.',
          highlight: 'Bio & Values',
        },
        {
          id: 'kinh-nghiem',
          title: 'Experience & Services',
          desc: 'Career progression with leading publishing houses and specialized editorial services.',
          highlight: 'Timeline & Services',
        },
        {
          id: 'lien-he',
          title: 'Contact & Collaboration',
          desc: 'Inquiries for manuscript appraisal, translation, and consulting. Email preferred.',
          highlight: 'contact@linhdang.id.vn',
        },
      ],
      viewContent: 'Explore section',
    },
    profileBanner: {
      lastName: 'Last name',
      firstName: 'First name',
      preferredName: 'Preferred name',
      altText: 'Linh Dang - Editorial Portrait',
    },
    projects: {
      sectionBadge: 'BIBLIOGRAPHY INDEX · 2013 – 2026',
      title: 'Projects',
      desc: 'Curated highlights spanning over a decade of developmental editing, literary translation, and publishing production with premier publishing houses in Vietnam.',
      showing: 'SHOWING',
      ofPublications: 'PUBLICATIONS',
      categories: {
        all: 'All Categories',
        transLit: 'Translated Literature',
        nonFiction: 'Non-Fiction & Philosophy',
        artDesign: 'Art & Book Design',
        essays: 'Essays & Cultural Studies',
      },
      searchPlaceholder: 'Search titles, authors, publishers...',
      allRoles: 'All Roles',
      viewDetails: 'View dossier & excerpts',
      author: 'Author',
      originalAuthor: 'Original Author / Source',
      publisher: 'Publisher / Imprint',
      year: 'Year',
      empty: 'No publications found matching current filters.',
      resetFilter: 'Reset filters',
    },
    modal: {
      originalTitleLabel: 'Original Title',
      authorLabel: 'Author',
      publisherLabel: 'Publisher',
      tabDossier: 'Publication Dossier',
      tabExcerpt: 'Read Excerpt',
      summaryHeading: 'Work Summary',
      editorialNoteHeading: 'Editorial Insights & Craft Notes',
      colophonHeading: 'Colophon & Production Specifications',
      pagesLabel: 'Page Count',
      pagesUnit: 'pages',
      undefinedSpec: 'To be announced',
      isbnLabel: 'ISBN Code',
      internalEdition: 'Internal imprint release',
      formatLabel: 'Binding & Production',
      defaultFormat: 'Flapped trade paperback',
      yearLabel: 'Release Year',
      bilingualComparison: 'Bilingual Comparison',
      vietnameseExcerpt: 'Vietnamese Excerpt',
      vietnameseVersion: 'Vietnamese Edition',
      originalText: 'Original Source',
      excerptDisclaimer: '*Excerpts displayed for critical evaluation and educational discussion of editorial practice.',
      copyrightNotice: 'Intellectual copyright belongs to the author and affiliated publishing imprint.',
      inquireCollab: 'Inquire on similar manuscripts',
      closeModal: 'Close modal',
    },
    about: {
      sectionBadge: 'EDITORIAL PROFILE & CRAFT ETHOS',
      heading: 'The guardian behind the prose and the enduring path of manuscript care.',
      bioP1: 'I entered the publishing world in 2013, an era of profound transformation for Vietnam’s book industry in both title volume and visual production standards. Over 12 years of hands-on work across literary fiction, philosophical treatises, essays, and fine art volumes, my founding excitement remains undiminished: that silent thrill of opening an untouched manuscript page.',
      bioP2: 'To me, a book is never an ordinary commercial commodity stamped for mass consumerism. It is a vessel of dedicated time, scholarship, and existential questioning. Whether working as a developmental editor, line editor, or literary translator, I hold myself as the author’s most faithful ally and critical confidant.',
      bioP3: 'Formative years embedded within Vietnam’s distinguished houses—including Nha Nam, Kim Dong, Omega Plus, and Tre Publishing—afforded me direct participation at the Frankfurt Book Fair, rights negotiations with international agencies, and above all, deep humility before the collective repository of human wisdom.',
      workingLanguagesLabel: 'WORKING LANGUAGES',
      workingLanguagesVal: 'Vietnamese (Native) - English - Japanese',
      expertiseLabel: 'CORE SPECIALIZATIONS',
      expertiseVal: 'Literature, Arts, Young Adult Manga & Comics, Children’s Literature',
      principlesBadge: 'CORE ETHICAL PRINCIPLES',
      principlesTitle: 'Three Principles of the Manuscript Editor',
      principles: [
        {
          num: 'I',
          title: 'Reverence for the Author’s Native Cadence',
          desc: 'Every writer breathes through their own psychological architecture. The editor’s calling is never to enforce personal linguistic habits, but to help the author’s true, unvarnished voice ring with absolute clarity.',
        },
        {
          num: 'II',
          title: 'Sensitivity to Contemporary Vietnamese Nuance',
          desc: 'Living language continually shifts. When translating or line editing, one must balance scholarly fidelity to source terminology with the rhythmic cadence, natural lyricism, and tactile warmth of modern Vietnamese.',
        },
        {
          num: 'III',
          title: 'The Grace of Editorial Invisibility',
          desc: 'The consummate editor leaves no visible fingerprints for the reader. When a book is opened, there should exist only an intimate, uninterrupted communion between writer and reader.',
        },
      ],
      confidentialityNote: '*Strict adherence to manuscript non-disclosure and intellectual property rights.',
      testimonialsBadge: 'TESTIMONIALS & COLLEAGUE ENDORSEMENTS',
      testimonialsSubBadge: 'PROFESSIONAL PEER REVIEWS',
    },
    experience: {
      sectionBadge: 'CAREER TRAJECTORY · 2013 – 2026',
      title: 'Professional Experience & Advisory Services',
      desc: 'Over a decade partnering with premier publishers and international authors, providing rigorous editorial standards from conceptualization to print.',
      tabTimeline: 'Career Timeline',
      tabServices: 'Editorial Services',
      keyProjectsHeader: 'KEY HIGHLIGHTS & DELIVERIES:',
      scopeHeader: 'SCOPE OF PROFESSIONAL ENGAGEMENT:',
      deliverableHeader: 'FINAL DELIVERABLE:',
      requestService: 'Schedule an inquiry for this service',
      customSolutionTitle: 'Need a customized publishing solution?',
      customSolutionDesc: 'For limited artisan editions, institutional commemorative volumes, or complex multilingual anthologies, custom editorial workflows are tailored on demand.',
      customSolutionAction: 'Send direct brief via Email',
    },
    editorialNotes: {
      stripLeft: 'EDITORIAL ESSAYS & ARCHIVES',
      stripMiddle: 'Reflections on prose, translation ethics, and typography',
      stripRight: 'Special Monographs',
      sectionBadge: 'EDITORIAL REFLECTIONS · 2024 – 2026',
      title: 'Marginalia & Craft Notes',
      desc: 'Reflections on the cadence of Vietnamese prose, the subtle art of editorial restraint, and the timeless tactile dignity of the printed codex.',
      curatedCount: '3 Curated Essays',
      readFullArticle: 'Read full essay',
      fontNormal: 'Standard font size',
      fontLarge: 'Enlarged font size',
      closeArticle: 'Close essay',
      authorCredit: 'Essay by Linh Dang · Book Editor & Literary Translator',
      endColophon: 'END OF ESSAY · ALL INTELLECTUAL RIGHTS RESERVED',
      citeNotice: 'For non-commercial academic citation, please attribute to author Linh Dang.',
    },
    contact: {
      sectionBadge: 'PROFESSIONAL INQUIRIES & COLLABORATION',
      title: 'Contact & Collaboration',
      desc: 'Open for manuscript development briefs, literary translations, institutional publishing consultations, and editorial masterclasses.',
      priorityBadge: 'PREFERRED COMMUNICATION CHANNEL',
      responseTime: 'Standard reply within 24 – 48 business hours',
      emailPriorityTitle: 'Email Preferred for Editorial Inquiries',
      emailPriorityDesc: 'To ensure manuscript drafts, structural outlines, and collaboration parameters remain securely archived and traceable, email is the designated primary channel for all professional exchanges.',
      primaryEmailLabel: 'Editorial Inquiries & Manuscript Submissions',
      workEmailLabel: 'Personal Publishing Domain Mailbox',
      copyEmail: 'Copy',
      copied: 'Copied!',
      openMailClient: 'Open default email app',
      partnerLinkTitle: 'Dedicated Link for International Partners',
      partnerLinkDesc: 'When corresponding with international publishers, foreign authors, or literary copyright agencies, simply share the direct link below. The portfolio interface will automatically activate and display exclusively in English.',
      partnerLinkDirectUrl: 'Direct URL with auto-activated English:',
      copyPartnerLink: 'Copy English Link',
      copiedPartnerLink: 'English link copied!',
      socialsTitle: 'PROFESSIONAL NETWORKS',
      socialsDesc: 'Follow industry commentary, book reviews, and network updates:',
      linkedinSub: 'Editorial & Academic Profile',
      linkedinDesc: 'International publishing network & rights liaisons',
      facebookSub: 'Personal Reading Room & Titles',
      facebookDesc: 'Behind-the-scenes glimpses into the editorial desk',
      ndaTitle: 'Comprehensive Confidentiality (NDA)',
      ndaDesc: 'All draft concepts, manuscript excerpts, and project proposals are protected under strict international intellectual property standards.',
      responseCommitmentTitle: 'Prompt Review Guarantee',
      responseCommitmentDesc: 'Qualified proposals receive initial assessment notes or a scheduled preliminary virtual briefing within 48 hours.',
      workLocationTitle: 'Operating Bases',
      workLocationDesc: 'Global remote collaboration in English, Vietnamese, and Japanese. In-person meetings in Ho Chi Minh City.',
    },
    footer: {
      tagline: 'Book editor, literary & non-fiction translator, and independent publishing consultant based in Vietnam.',
      backToTop: 'Back to top',
      personalPositioningTitle: 'LOCATION & FOCUS',
      personalPositioningDesc: 'Ho Chi Minh City & Global\nFocus: Literature, Arts, Young Adult Manga & Comics, Children’s Literature',
      fastNavTitle: 'QUICK NAVIGATION',
      navHome: 'Home',
      navProjects: 'Projects',
      navAbout: 'About & Philosophy',
      navExperience: 'Experience & Services',
      navEssays: 'Editorial Essays',
      navContact: 'Contact & Inquiries',
      colophonTitle: 'COLOPHON & DESIGN ETHOS',
      colophonDesc: 'Designed in the spirit of silent typography: Nunito typeface, natural ivory paper tone (#FBF9F5), and warm charcoal black (#1C1A17).',
      directContactTitle: 'DIRECT INQUIRIES',
      backupEmailLabel: 'Secondary',
      copyright: '© 2013 – 2026 Linh Dang (linhdang.id.vn). All publication and citation rights reserved.',
      copyrightTuyetLinh: 'Copyright © Tuyet Linh · All rights reserved.',
      subtitle: 'Book Editor · Literary Translator · Publishing Consultant',
    },
    nav: {
      prevPage: 'Previous:',
      nextPage: 'Next:',
      backHome: 'Back to Home',
    },
  },
};

// Bilingual translations for projects data
export const PROJECTS_EN_MAP: Record<string, Partial<Project>> = {
  'khong-gian-cua-chu': {
    title: 'The Space of Letters & The Art of Typography',
    role: 'Biên tập bản thảo',
    publisher: 'Fine Arts Publishing House & Dzung Yoko Studio',
    format: 'Embossed foil hardcover, Munken Print 115gsm',
    summary: 'A definitive study on page architecture, the visual dialogue between the reader’s eye, whitespace, and typographic rhythm across print and digital media.',
    editorialNote: 'This project demanded rigorous Vietnamese typographic terminology—translating foundational concepts like "kerning", "leading", and "grid system" with both scholarly fidelity and visual elegance for Vietnam’s design community.',
    awardsOrRecognition: 'Vietnam Book Award – Outstanding Book Design 2024',
    tags: ['Structural Editing', 'Typography', 'Book Arts', 'Fine Press'],
  },
  'mua-thu-cua-nguoi-ke-chuyen': {
    title: 'The Storyteller’s Autumn',
    role: 'Dịch giả',
    publisher: 'Writers Association Publishing & Nha Nam',
    format: 'Flapped paperback, eye-comfort Bai Bang ivory paper',
    summary: 'A poignant collection of short stories exploring memory, unspoken remorse, and the fragile ambiguities of human identity across 20th-century historical shifts.',
    editorialNote: 'Ishiguro employs a calm, hauntingly restrained English. The central challenge in Vietnamese was preserving this profound emotional understatement without rendering the prose distant or stiff.',
    awardsOrRecognition: '4th Reprint (2024)',
    tags: ['Literary Translation', 'British Literature', 'Nobel Laureate', 'Nha Nam'],
  },
  'khao-cuu-triet-hoc-hang-ngay': {
    title: 'Philosophy in Every Breath',
    originalTitle: 'Philosophical Fragments for Everyday Life',
    role: 'Biên tập bản thảo',
    publisher: 'Tri Thuc Publishing House & Omega Plus',
    format: 'Paperback with dust jacket, square spine',
    summary: 'A masterly dialogue between Western and Eastern philosophical traditions on time, leisure, and serenely navigating an ever-changing world.',
    editorialNote: 'Direct cross-textual comparison between French source text, classical Greek terms, and Sino-Vietnamese philosophical etymology to establish comprehensive and illuminating footnotes.',
    awardsOrRecognition: 'Good Book Award Nominee – Research Category 2023',
    tags: ['Philosophy', 'Scholarly Editing', 'Comparative Research', 'Omega Plus'],
  },
  'ky-uc-nhung-can-nha-co-ha-noi': {
    title: 'Memories of Historic Hanoi Houses',
    role: 'Phát triển xuất bản',
    publisher: 'The Gioi Publishing House & Book Hunter',
    format: 'Special edition, full-color on 140gsm matte art paper',
    summary: 'Cultural and architectural documentation of 40 Old Quarter townhouses and early 20th-century villas through eyewitness memoirs, architectural reconstructions, and rare archives.',
    editorialNote: 'From conceptual ideation, engaging heritage scholars, and manuscript curation to coordinating with street-map illustrators—a turnkey project demonstrating end-to-end publishing curation.',
    awardsOrRecognition: 'Bui Xuan Phai – For Love of Hanoi Cultural Award 2022',
    tags: ['Project Development', 'Cultural Heritage', 'Limited Edition', 'Curation'],
  },
  'the-gioi-tu-goc-nhin-con-tre': {
    title: 'The World Through a Child’s Eyes',
    originalTitle: 'The Children’s Sense of Wonder',
    role: 'Dịch giả',
    publisher: 'Kim Dong Publishing House',
    format: 'Flapped paperback with watercolor illustrations',
    summary: 'A gentle exploration rekindling innate empathy and pure wonder in children toward the wild majesty of the natural world.',
    editorialNote: 'Crafted with lyrical, melodious Vietnamese prose suited for reading aloud between parents and children during tranquil bedtime hours.',
    awardsOrRecognition: 'Recommended Reading by Vietnam Publishers Association',
    tags: ['Translation', 'Nature & Ecology', 'Kim Dong Publishing'],
  },
  'tieng-vong-cua-dem': {
    title: 'Echoes of the Night',
    originalTitle: 'Echoes of Solitude',
    role: 'Biên tập bản thảo',
    publisher: 'Vietnam Women’s Publishing House',
    format: 'Paperback, Finnish bulky paper',
    summary: 'A visceral novel delving into somatic trauma, female identity, and psychological liberation within an unforgiving industrial metropolis.',
    editorialNote: 'Collaborated closely with the Korean translator to polish tactile vocabularies, somnambulist imagery, and the distinct figurative cadence of the Nobel laureate.',
    awardsOrRecognition: 'Top Bestseller – Literary Weekly Gazette',
    tags: ['Asian Literature', 'Manuscript Editing', 'Women’s Publishing'],
  },
  'nghe-thuat-bien-tap-sach': {
    title: 'The Craft of Developmental Editing',
    originalTitle: 'The Craft of Developmental Editing',
    role: 'Dịch giả',
    publisher: 'Tre Publishing House & BookCraft',
    format: 'Premium paperback with textured linen finish',
    summary: 'An indispensable guide for contemporary editors on narrative restructuring, author collaboration, and pacing calibration.',
    editorialNote: 'Translated with the intimate insight of someone who has navigated hundreds of passionate yet rewarding dialogues with authors.',
    awardsOrRecognition: 'Reference curriculum for professional publishing workshops',
    tags: ['Publishing Handbook', 'Specialized Translation', 'Tre Publishing'],
  },
  'tap-chi-giay-van-nghe-so-dac-biet': {
    title: '"Letters & Life" Journal – Issues 01 & 02',
    role: 'Giám tuyển nội dung',
    publisher: 'Independent limited edition (500 numbered copies)',
    format: 'Hand-stitched spine, kraft and fine paper',
    summary: 'An independent literary and visual arts periodical bringing together 25 outstanding Vietnamese authors and emerging visual artists.',
    editorialNote: 'Curating submissions, long-form interviews, art direction, and press checks at traditional offset printing facilities in Hanoi.',
    awardsOrRecognition: 'Sold out within 48 hours of release',
    tags: ['Independent Periodical', 'Content Curation', 'Artisan Print'],
  },
};

// Bilingual translations for experiences data
export const EXPERIENCES_EN: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2020 – Present',
    role: 'Senior Editor & Independent Publishing Consultant',
    organization: 'Independent Publishing Studio / Multi-Press Collaboration',
    organizationType: 'Independent Consulting',
    location: 'Hanoi & Ho Chi Minh City',
    description: 'Directing key literary translation releases, limited art editions, and strategic manuscript advisory for Vietnamese authors preparing debut publications.',
    keyProjects: [
      'Appraised 120+ international manuscripts from Frankfurt & London book fair agencies',
      'Directly mentored 15 authors to complete debut manuscripts acquired by major publishers',
      'Established an agile translation network across French, English, and Korean literature',
    ],
  },
  {
    id: 'exp-2',
    period: '2016 – 2020',
    role: 'Head of Translated Literature & Philosophy Series',
    organization: 'Omega Plus / Nha Nam Publishing',
    organizationType: 'Leading Publishing House',
    location: 'Hanoi',
    description: 'Directing the end-to-end development of classical literature and humanities series: rights acquisition, translator selection, comparative editing, art direction, and publication licensing.',
    keyProjects: [
      'Curated the Humanities Research Series featuring 35+ bestselling titles',
      'Represented editorial delegations at Frankfurt and Bangkok International Book Fairs',
      'Standardized editorial manuals and trained 10 junior editors',
    ],
  },
  {
    id: 'exp-3',
    period: '2013 – 2016',
    role: 'Manuscript Editor & Rights Specialist',
    organization: 'Tre Publishing House & Kim Dong (Hanoi Branch)',
    organizationType: 'National Publishing House',
    location: 'Hanoi',
    description: 'Directly edited literary prose, children’s literature, and essays; closely collaborated with authors and typography prepress teams.',
    keyProjects: [
      'Edited over 40 award-winning titles receiving warm reader reception',
      'Curated the seminar series "Contemporary Vietnamese in Translated Books" with 300+ attendees',
    ],
  },
];

// Bilingual translations for publishing services
export const SERVICES_EN: PublishingService[] = [
  {
    id: 'tham-dinh-ban-thao',
    title: 'Manuscript Appraisal',
    tagline: 'Manuscript Appraisal & Reader Report',
    description: 'Comprehensive, objective evaluation of narrative structure, market viability in Vietnam, and strategic submission roadmaps for publishers.',
    scope: [
      'Detailed 10–15 page reader report analyzing strengths and structural gaps',
      'Market positioning analysis and target readership definition',
      'Concrete recommendations on narrative arcs, pacing, and scholarly clarity',
    ],
    deliverable: 'In-depth critical feedback report with step-by-step revision milestones',
  },
  {
    id: 'bien-tap-chuyen-sau',
    title: 'Comprehensive Manuscript Editing',
    tagline: 'Developmental & Comprehensive Line Editing',
    description: 'Collaborating line by line with the author. Principled interventions into narrative pacing, stylistic polish, grammatical elegance, and honoring individual voice.',
    scope: [
      'Developmental editing: narrative arc, rhythm, and chapter balance',
      'Line editing: tonal resonance, linguistic sharpness, and cadenced phrasing',
      'Fact-checking & specialized terminology verification',
    ],
    deliverable: 'Fully refined manuscript with two comprehensive revision rounds in direct dialogue',
  },
  {
    id: 'dich-thuat-van-hoc',
    title: 'Literary & Scholarly Translation',
    tagline: 'Literary & Scholarly Translation (EN/FR → VI)',
    description: 'Rendering English and French works into Vietnamese with academic precision blended with natural, lyrical resonance.',
    scope: [
      'Classical and contemporary international prize-winning literature',
      'Scholarly treatises in philosophy, cultural history, and aesthetic theory',
      'Comprehensive terminology glossary and contextual annotation apparatus',
    ],
    deliverable: 'Publication-ready Vietnamese translation ready for press delivery',
  },
  {
    id: 'tu-van-xuat-ban',
    title: 'Publishing Strategy & Advisory',
    tagline: 'Publishing Strategy & Project Management',
    description: 'Turnkey consulting for independent authors, cultural institutions, and creators seeking high-standard nationwide book distribution.',
    scope: [
      'Book formatting guidance: paper stock, binding styles, and jacket design',
      'Liaison with reputable publishers for official publishing licenses',
      'Strategic release planning, cultural media outreach, and book launch events',
    ],
    deliverable: 'Complete publishing project dossier from initial concept to shelf placement',
  },
];

// Bilingual translations for testimonials
export const TESTIMONIALS_EN: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Linh Dang is one of those exceptionally rare editors capable of intuiting an author’s core artistic vision even from the rawest initial draft. Her linguistic sensitivity and methodical diligence elevated my book to an entirely new echelon.',
    author: 'Dr. Nguyen Van Hung',
    title: 'Cultural Researcher & Author',
    affiliation: 'Literary Scholarly Council',
  },
  {
    id: 't-2',
    quote: 'Whenever we entrust a demanding translation to Linh Dang for review, our editorial board has complete peace of mind. Linh navigates subtle grammatical nuances with ease, possesses infinite patience with complex terms, and consistently preserves a melodious cadence.',
    author: 'Tran Thi Mai Khanh',
    title: 'Head of International Books Division',
    affiliation: 'Leading Publishing House in Hanoi',
  },
  {
    id: 't-3',
    quote: 'Linh Dang’s translation is not only faithful to our original work but also captures its delicate poetry and melancholy tone. An exemplary model of author-translator international collaboration.',
    author: 'Author Rights Representative',
    title: 'Euro-Asian Literary Agency',
    affiliation: 'Paris / Seoul Agency',
  },
];

// Bilingual translations for editorial articles
export const ARTICLES_EN: EditorialArticle[] = [
  {
    id: 'bi-mat-khoang-trang',
    title: 'The Silence Between Punctuation Marks and the Virtue of Restraint',
    subtitle: 'On the restraint of prose caretakers in an age of information surfeit',
    date: 'November 2024',
    readTime: '6 min read',
    category: 'Editorial Craft Essay',
    summary: 'When a reader closes a book and remarks: "The author’s prose flows so effortlessly!", that is the highest accolade for an editor—who remained unseen in the shadows so that the words could shine on their own.',
    fullContent: [
      'Book editing, at its essence, is an art of voluntary invisibility. In a society where everyone seeks to shout and capture attention, the editor willingly serves as a quiet gatekeeper.',
      'Many mistakenly assume that an editor’s work merely entails correcting grammar and fixing typos. But that is only the outermost skin. The core calling is to listen to the resonant frequency of the manuscript. A fine book possesses its own pulse: passages that surge like rapids, and passages that rest still like a winter lake.',
      'The most intrusive editorial blunder is forcing one’s own vocabulary and stylistic habits onto an author’s creation. Preserving fidelity to the native voice while gently plucking away pebbles that stumble the reader—this is the delicate boundary between true mastery and condescension.',
      'A misplaced comma can shatter an emotional arc. An overly ornate word can spoil genuine narrative honesty. Thus, every manuscript crossing the desk demands not only the razor eye of a craftsman, but also the calm patience and compassion of a faithful companion.',
    ],
  },
  {
    id: 'chuyen-ngu-tam-hon',
    title: 'Translation Is Not Copying a Dictionary, It Is Rebirthing a Soul',
    subtitle: 'Musings on rendering world literature into modern Vietnamese prose',
    date: 'August 2024',
    readTime: '8 min read',
    category: 'Translator’s Desk',
    summary: 'Every language embodies a singular worldview. When translating from English or French into Vietnamese, one does not merely translate literal definitions, but transplants a flowering branch into fresh, fertile soil.',
    fullContent: [
      'Certain Vietnamese words convey sensory atmospheres that no bilingual dictionary can fully encompass. Words like "chênh chao", "man mác", "vương vít". Conversely, Western terms such as "serendipity", "saudade", or "understatement" require the translator to search through folk poetry, classical prose, and vernacular idiom to locate true psychological equivalence.',
      'A mechanical translator sees the source text as a sequence of obstacles to be decoded. An attentive translator senses behind each word the character’s hesitation, their breathing pace, the ambient scent of an afternoon rain in Dublin, or a riverside cafe along the Seine.',
      'A triumphant translation makes the reader feel as though the author is whispering directly in fluent, graceful Vietnamese, without forfeiting the distinctive nuance of the source culture.',
    ],
  },
  {
    id: 'suc-song-sach-giay',
    title: 'Why Does a Well-Designed Page Still Make Us Slow Down?',
    subtitle: 'The physical materiality of the codex and tactile experiences that resist digitization',
    date: 'April 2024',
    readTime: '5 min read',
    category: 'Reading Culture',
    summary: 'Against the frantic flickering of backlit screens, a book bound with ivory paper and a square spine remains humanity’s most serene refuge for sustained contemplation.',
    fullContent: [
      'We live in an epoch of infinite scroll. Our eyes graze across thousands of information fragments daily, yet our minds starve for completeness.',
      'A physical book possesses tangible embodiment: its weight in the hand, the soft rustle of turning a page, the aroma of drying ink and wood fiber. These tactile sensations are not mere romantic nostalgia. They are neural anchors orienting our spatial and temporal awareness of the reading journey.',
      'To craft a fine book—from setting 10.5pt typography with 1.55 line leading to ensuring the outer margins generously accommodate thumbs without obscuring prose—is an act of deep reverence for the reader’s dignity.',
    ],
  },
];

// Bilingual combined sets
export const EXPERIENCES_BILINGUAL: Record<Language, ExperienceItem[]> = {
  vi: EXPERIENCES,
  en: EXPERIENCES_EN,
};

export const SERVICES_BILINGUAL: Record<Language, PublishingService[]> = {
  vi: PUBLISHING_SERVICES,
  en: SERVICES_EN,
};

export const TESTIMONIALS_BILINGUAL: Record<Language, Testimonial[]> = {
  vi: TESTIMONIALS,
  en: TESTIMONIALS_EN,
};

export const ARTICLES_BILINGUAL: Record<Language, EditorialArticle[]> = {
  vi: EDITORIAL_ARTICLES,
  en: ARTICLES_EN,
};

export const getLocalizedProject = (project: Project, language: Language): Project => {
  if (language === 'vi') return project;
  const enOverride = PROJECTS_EN_MAP[project.id];
  if (!enOverride) return project;
  return {
    ...project,
    ...enOverride,
  };
};

export const getRoleLabel = (role: string, language: Language): string => {
  if (language === 'vi') return role;
  switch (role) {
    case 'Biên tập bản thảo':
      return 'Manuscript Editing';
    case 'Dịch giả':
      return 'Translation';
    case 'Phát triển xuất bản':
      return 'Publishing Development';
    case 'Giám tuyển nội dung':
      return 'Content Curation';
    default:
      return role;
  }
};

export const getCategoryLabel = (category: string, language: Language): string => {
  if (language === 'vi') return category;
  switch (category) {
    case 'Tất cả':
      return 'All Categories';
    case 'Văn học dịch':
      return 'Translated Literature';
    case 'Phi hư cấu & Triết học':
      return 'Non-Fiction & Philosophy';
    case 'Nghệ thuật & Thiết kế':
      return 'Art & Design';
    case 'Khảo cứu & Tản văn':
      return 'Essays & Studies';
    default:
      return category;
  }
};
