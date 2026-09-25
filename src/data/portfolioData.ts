import { Project, ExperienceItem, PublishingService, EditorialArticle, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Linh Đặng',
  domain: 'linhdang.id.vn',
  titles: 'Biên tập viên sách · Dịch giả · Chuyên gia Xuất bản',
  location: 'Việt Nam',
  email: 'contact@linhdang.id.vn',
  secondaryEmail: 'linhdang.editor@gmail.com',
  experienceYears: 12,
  publishedBooksCount: '65+',
  translatedTitlesCount: '18+',
  readershipEstimate: '450.000+',
  bioShort: 'Biên tập viên và dịch giả độc lập với hơn một thập kỷ đồng hành cùng các nhà xuất bản hàng đầu tại Việt Nam. Chuyên chú vào các ấn phẩm văn học, nghệ thuật, truyện tranh thanh thiếu niên và truyện thiếu nhi.',
  manifesto: 'Một cuốn sách hoàn hảo không phải là cuốn sách không còn lỗi chính tả, mà là nơi tiếng nói bản nguyên của tác giả tìm được nhịp thở tự nhiên nhất trong tâm thức bạn đọc tiếng Việt.'
};

export const PROJECTS: Project[] = [
  {
    id: 'khong-gian-cua-chu',
    title: 'Không Gian Của Chữ & Nghệ Thuật Dàn Trang',
    originalTitle: 'The Architecture of Typography & Editorial Space',
    author: 'Robert Bringhurst & Ellen Lupton',
    originalAuthor: 'Biên tập & Chú giải tiếng Việt',
    role: 'Biên tập bản thảo',
    category: 'Nghệ thuật & Thiết kế',
    publisher: 'NXB Mỹ Thuật & Dzung Yoko Studio',
    year: 2024,
    pages: 342,
    isbn: '978-604-78-9120-1',
    format: 'Bìa cứng ép nhũ, giấy định lượng Munken Print 115gsm',
    coverAccent: '#2F4F4F',
    summary: 'Công trình khảo cứu kinh điển về cấu trúc trang sách, mối quan hệ giữa mắt đọc, khoảng trắng và linh hồn của con chữ trong kỷ nguyên in ấn lẫn số hóa.',
    editorialNote: 'Dự án đòi hỏi sự khắt khe tối đa về thuật ngữ typography tiếng Việt — nơi những khái niệm như "kerning", "leading", "drop cap", "grid system" cần được chuyển ngữ vừa học thuật, vừa thanh thoát đối với giới thiết kế thị giác Việt Nam.',
    awardsOrRecognition: 'Giải Sách Đẹp – Hạng mục Thiết kế ấn phẩm xuất sắc 2024',
    excerpt: {
      chapter: 'Chương IV: Khoảng lặng cấu thành âm hưởng',
      viText: 'Khoảng trắng trên trang giấy không phải là sự vắng mặt của mực in. Nó chính là bầu khí quyển để các con chữ hít thở. Người biên tập và người dàn trang cũng tựa như người kiến tạo nhịp điệu của một bản giao hưởng tĩnh lặng.',
      originalText: 'White space on a page is never the absence of ink; it is the very oxygen that allows letters to breathe and resonate within the eye of the attentive reader.',
      originalLanguage: 'Tiếng Anh'
    },
    featured: true,
    tags: ['Biên tập cấu trúc', 'Typography', 'Sách nghệ thuật', 'Sách đẹp']
  },
  {
    id: 'mua-thu-cua-nguoi-ke-chuyen',
    title: 'Mùa Thu Của Người Kể Chuyện',
    originalTitle: 'The Storyteller’s Autumn',
    author: 'Kazuo Ishiguro',
    role: 'Dịch giả',
    category: 'Văn học dịch',
    publisher: 'NXB Hội Nhà Văn & Nhã Nam',
    year: 2023,
    pages: 288,
    isbn: '978-604-98-3341-2',
    format: 'Bìa mềm tay gập, ruột in giấy Bãi Bằng ngà chống lóa',
    coverAccent: '#8B4513',
    summary: 'Tuyển tập truyện ngắn lắng đọng về ký ức, sự hối tiếc và những mảng xám mờ ảo trong thân phận con người sau những biến cố lịch sử thế kỷ XX.',
    editorialNote: 'Ishiguro sử dụng thứ tiếng Anh điềm tĩnh đến rợn ngợp. Thách thức lớn nhất khi chuyển ngữ sang tiếng Việt là giữ trọn cảm giác kìm nén cảm xúc (understatement) mà không biến câu văn trở nên gượng gạo hay lạnh lùng.',
    awardsOrRecognition: 'Tái bản lần thứ 4 (2024)',
    excerpt: {
      chapter: 'Trích đoạn: Buổi chiều muộn bên dòng sông nhỏ',
      viText: 'Có những ký ức ta cố tình giấu kỹ nơi góc khuất, không phải vì muốn quên đi, mà vì sợ ánh sáng gay gắt của hiện tại sẽ làm phai nhạt đi màu sắc êm dịu của những gì đã từng là tất cả.',
      originalText: 'There are memories we keep folded away in quiet corners, not out of any desire to forget, but because we fear the harsh glare of noon might strip away the gentle patina of what once was everything.',
      originalLanguage: 'Tiếng Anh'
    },
    featured: true,
    tags: ['Dịch văn học', 'Văn học Anh', 'Nobel Văn chương', 'Nhã Nam']
  },
  {
    id: 'khao-cuu-triet-hoc-hang-ngay',
    title: 'Triết Học Trong Từng Hơi Thở',
    originalTitle: 'Philosophical Fragments for Everyday Life',
    author: 'François Jullien',
    role: 'Biên tập bản thảo',
    category: 'Phi hư cấu & Triết học',
    publisher: 'NXB Tri Thức & Omega Plus',
    year: 2023,
    pages: 410,
    isbn: '978-604-99-4412-8',
    format: 'Bìa mềm áo khoác, gáy vuông',
    coverAccent: '#3B4D3C',
    summary: 'Cuộc đối thoại uyên bác giữa triết học phương Tây và tư tưởng phương Đông về thời gian, sự nhàn tản và cách con người tồn tại an nhiên giữa thế giới biến thiên.',
    editorialNote: 'Biên tập đối chiếu trực tiếp bản dịch tiếng Pháp với nguyên bản thuật ngữ cổ Hy Lạp và chữ Hán, nhằm tạo nên một hệ thống chú thích chân trang mạch lạc, trợ lực đắc lực cho người đọc chuyên sâu.',
    awardsOrRecognition: 'Đề cử Sách Hay – Hạng mục Khảo cứu 2023',
    excerpt: {
      chapter: 'Chương II: Về sự vô hình của những chuyển biến âm thầm',
      viText: 'Những đổi thay lớn nhất của kiếp người thường không diễn ra bằng tiếng sấm sét. Chúng âm thầm ngấm vào ngày thường như sương ngấm cỏ, cho đến khi ta chợt nhận ra mình đã thuộc về một bờ bến khác.',
      originalText: 'Les plus grandes mutations ne se manifestent guère par le fracas. Elles s’imprègnent dans le quotidien comme la rosée dans l’herbe.',
      originalLanguage: 'Tiếng Pháp'
    },
    featured: true,
    tags: ['Triết học', 'Biên tập học thuật', 'Khảo cứu đối chiếu', 'Omega Plus']
  },
  {
    id: 'ky-uc-nhung-can-nha-co-ha-noi',
    title: 'Ký Ức Những Căn Nhà Cổ Hà Nội',
    author: 'Nhiều tác giả & KTS. Hoàng Đạo Kính (Chủ biên)',
    role: 'Phát triển xuất bản',
    category: 'Khảo cứu & Tản văn',
    publisher: 'NXB Thế Giới & Book Hunter',
    year: 2022,
    pages: 360,
    isbn: '978-604-77-6582-0',
    format: 'Ấn bản đặc biệt, in màu toàn phần giấy tráng mờ 140gsm',
    coverAccent: '#8C3B2B',
    summary: 'Hồ sơ văn hóa và kiến trúc về 40 nếp nhà phố cổ và biệt thự đầu thế kỷ XX qua lời kể của nhân chứng, bản vẽ phục dựng và tư liệu lưu trữ quý giá.',
    editorialNote: 'Từ khâu lên ý tưởng đề tài, tiếp cận các chuyên gia di sản, thẩm định bản thảo đến phối hợp với họa sĩ minh họa bản đồ phố cũ. Đây là dự án trọn gói minh chứng cho năng lực giám tuyển và điều phối xuất bản phức hợp.',
    awardsOrRecognition: 'Giải thưởng Văn hóa Bùi Xuân Phái – Vì Tình yêu Hà Nội 2022',
    excerpt: {
      chapter: 'Lời người làm sách: Giữ lại một tiếng phong cầm',
      viText: 'Mỗi viên ngói rêu, mỗi ô cửa chớp chênh vênh ở Hà Nội không đơn thuần là vật liệu xây dựng. Chúng là những hộp chứa thời gian, cất giữ tiếng thở dài, tiếng rao đêm và nếp sinh hoạt thanh tao của người Thăng Long xưa.',
    },
    featured: true,
    tags: ['Phát triển dự án', 'Di sản văn hóa', 'Ấn bản giới hạn', 'Giám tuyển']
  },
  {
    id: 'the-gioi-tu-goc-nhin-con-tre',
    title: 'Thế Giới Từ Góc Nhìn Trẻ Thơ',
    originalTitle: 'The Children’s Sense of Wonder',
    author: 'Rachel Carson & E.B. White',
    role: 'Dịch giả',
    category: 'Khảo cứu & Tản văn',
    publisher: 'NXB Kim Đồng',
    year: 2022,
    pages: 216,
    isbn: '978-604-2-21980-4',
    format: 'Bìa mềm có cánh, minh họa màu nước',
    coverAccent: '#2F6B55',
    summary: 'Một tác phẩm dịu dàng khơi gợi lòng trắc ẩn và sự rung động thuần khiết của trẻ nhỏ trước vẻ đẹp hoang sơ của thiên nhiên bao la.',
    editorialNote: 'Bản dịch tìm kiếm thứ ngôn ngữ trong trẻo, giàu nhạc điệu, có thể đọc to thành tiếng giữa cha mẹ và con cái trong những đêm thanh vắng.',
    awardsOrRecognition: 'Sách khuyên đọc của Hội Xuất bản Việt Nam',
    excerpt: {
      chapter: 'Bờ biển đêm và những đốm sáng phù du',
      viText: 'Nếu tôi có quyền năng trao cho mỗi đứa trẻ trên đời này một món quà vô giá, tôi sẽ tặng cho chúng niềm say mê bất tận trước những điều kỳ diệu của mặt đất và bầu trời.',
      originalText: 'If I had influence with the good fairy who is supposed to preside over the christening of all children, I should ask that her gift to each child in the world be a sense of wonder so indestructible that it would last throughout life.',
      originalLanguage: 'Tiếng Anh'
    },
    featured: false,
    tags: ['Dịch thuật', 'Thiên nhiên & Sinh thái', 'NXB Kim Đồng']
  },
  {
    id: 'tieng-vong-cua-dem',
    title: 'Tiếng Vọng Của Đêm',
    originalTitle: 'Echoes of Solitude',
    author: 'Han Kang',
    role: 'Biên tập bản thảo',
    category: 'Văn học dịch',
    publisher: 'NXB Phụ Nữ Việt Nam',
    year: 2021,
    pages: 264,
    isbn: '978-604-56-7819-3',
    format: 'Bìa mềm, giấy xốp Phần Lan',
    coverAccent: '#3E3C4F',
    summary: 'Tiểu thuyết sâu thẳm về nỗi đau thể xác, căn tính nữ quyền và sự giải thoát tâm thức giữa lòng đô thị công nghiệp khắc nghiệt.',
    editorialNote: 'Phối hợp mật thiết với dịch giả tiếng Hàn để chau chuốt từng trường từ vựng liên quan đến xúc giác, cơn mê sảng và tính tượng hình đặc thù của văn phong tác giả đoạt giải Nobel.',
    awardsOrRecognition: 'Top sách bán chạy tuần báo Văn nghệ',
    excerpt: {
      chapter: 'Phần I: Giấc mơ màu trắng',
      viText: 'Bóng tối không nuốt chửng sự vật. Nó chỉ tạm thời phủ lên tất cả một bức màn tĩnh mịch để những vết thương chưa lành có thể tự do cất lời.',
    },
    featured: false,
    tags: ['Văn học Á Đông', 'Biên tập tác phẩm', 'NXB Phụ Nữ']
  },
  {
    id: 'nghe-thuat-bien-tap-sach',
    title: 'Cẩm Nang Người Làm Bản Thảo',
    originalTitle: 'The Craft of Developmental Editing',
    author: 'Scott Norton',
    role: 'Dịch giả',
    category: 'Phi hư cấu & Triết học',
    publisher: 'NXB Trẻ & BookCraft',
    year: 2021,
    pages: 380,
    isbn: '978-604-1-18290-7',
    format: 'Bìa mềm cao cấp ép vân vải',
    coverAccent: '#7A5230',
    summary: 'Tài liệu hướng dẫn mẫu mực cho các biên tập viên hiện đại về cách tái cấu trúc bản thảo, làm việc cùng tác giả và xử lý nhịp điệu văn bản.',
    editorialNote: 'Cuốn cẩm nang gối đầu giường được dịch với tâm thế chia sẻ kinh nghiệm xương máu của chính người dịch sau hàng trăm cuộc trao đổi căng thẳng nhưng hạnh phúc với các tác giả.',
    awardsOrRecognition: 'Giáo trình tham khảo tại các khóa đào tạo xuất bản',
    excerpt: {
      chapter: 'Nguyên lý 1: Đừng viết thay tác giả',
      viText: 'Biên tập viên giỏi không phải là người để lại dấu ấn của chính mình trên từng trang sách. Người biên tập vĩ đại là chiếc kính lúp trong suốt giúp ánh sáng của tác giả chiếu rọi rực rỡ nhất.',
      originalText: 'A developmental editor is not there to replace the author’s voice with their own, but to act as a polished prism through which the author’s vision emerges with utmost clarity.',
      originalLanguage: 'Tiếng Anh'
    },
    featured: true,
    tags: ['Cẩm nang nghề', 'Dịch thuật chuyên ngành', 'NXB Trẻ']
  },
  {
    id: 'tap-chi-giay-van-nghe-so-dac-biet',
    title: 'Tạp Chí Ấn Phẩm "Chữ & Đời" – Số 01 & 02',
    author: 'Ban Biên Tập Sáng Tạo (Linh Đặng chủ biên)',
    role: 'Giám tuyển nội dung',
    category: 'Nghệ thuật & Thiết kế',
    publisher: 'Ấn phẩm độc lập phát hành giới hạn (500 bản)',
    year: 2024,
    pages: 180,
    format: 'Đóng chỉ thủ công, giấy kraft và mỹ thuật trơn',
    coverAccent: '#1F3A4B',
    summary: 'Chuyên san văn chương và nghệ thuật thị giác độc lập quy tụ 25 cây bút và nghệ sĩ minh họa trẻ xuất sắc của Việt Nam.',
    editorialNote: 'Toàn bộ quy trình tuyển chọn bài viết, phỏng vấn chuyên sâu, định hướng phong cách nghệ thuật trang in và kiểm định chất lượng xưởng in offset tại Hà Nội.',
    awardsOrRecognition: 'Bán hết toàn bộ ấn bản sau 48 giờ công bố',
    excerpt: {
      chapter: 'Mở trang: Vì sao chúng ta vẫn cần sách in?',
      viText: 'Khi ngón tay ta chạm vào độ nhám của giấy in và mũi ngửi thấy mùi thơm thoang thoảng của mực khô, đó là khoảnh khắc ta kéo chậm lại nhịp sống số vội vã để thật sự thuộc về hiện tại.',
    },
    featured: false,
    tags: ['Ấn phẩm độc lập', 'Giám tuyển nội dung', 'In ấn thủ công']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2020 – Hiện tại',
    role: 'Biên tập viên cấp cao & Cố vấn Bản thảo Độc lập',
    organization: 'Studio Xuất bản Độc lập / Hợp tác đa đơn vị',
    organizationType: 'Tự do & Tư vấn xuất bản',
    location: 'Hà Nội & TP. Hồ Chí Minh',
    description: 'Chủ trì các dự án sách dịch văn học trọng điểm, sách nghệ thuật ấn bản giới hạn và cố vấn chiến lược bản thảo cho tác giả Việt Nam muốn xuất bản tác phẩm hoàn chỉnh.',
    keyProjects: [
      'Thẩm định hơn 120 bản thảo quốc tế gửi từ các đại lý bản quyền Frankfurt & London',
      'Cố vấn trực tiếp cho 15 tác giả hoàn thành bản thảo đầu tay được các NXB lớn ký hợp đồng',
      'Thiết lập mạng lưới cộng tác viên dịch thuật văn học Pháp, Anh, Hàn Quốc'
    ]
  },
  {
    id: 'exp-2',
    period: '2016 – 2020',
    role: 'Trưởng ban Biên tập Dòng sách Dịch Văn học & Triết học',
    organization: 'Công ty Cổ phần Sách & Xuất bản Omega Plus / Nhã Nam',
    organizationType: 'Đơn vị xuất bản hàng đầu',
    location: 'Hà Nội',
    description: 'Quản lý toàn diện quy trình phát triển tủ sách Tinh hoa Tri thức và Văn học Cổ điển: từ mua bản quyền, tuyển chọn dịch giả, biên tập đối chiếu, thiết kế mỹ thuật đến xin giấy phép xuất bản.',
    keyProjects: [
      'Xây dựng thành công Tủ sách Khảo cứu Nhân văn với hơn 35 đầu sách bán chạy',
      'Đại diện đoàn biên tập tham dự Hội chợ Sách Quốc tế Frankfurt (Đức) & Bangkok',
      'Đào tạo và hướng dẫn quy chuẩn biên tập cho đội ngũ 10 biên tập viên trẻ'
    ]
  },
  {
    id: 'exp-3',
    period: '2013 – 2016',
    role: 'Biên tập viên Bản thảo & Chuyên viên Khai thác Bản quyền',
    organization: 'Nhà xuất bản Trẻ & Kim Đồng (Chi nhánh Hà Nội)',
    organizationType: 'Nhà xuất bản quốc gia',
    location: 'Hà Nội',
    description: 'Trực tiếp rà soát văn bản, biên tập ngôn ngữ tiếng Việt cho các ấn phẩm văn học thiếu nhi, tản văn và sách kỹ năng sống; làm việc cùng tác giả và đội ngũ chế bản đồ họa.',
    keyProjects: [
      'Biên tập hơn 40 đầu sách đoạt giải thưởng và nhận được phản hồi nồng nhiệt từ độc giả',
      'Tổ chức chuỗi tọa đàm "Tiếng Việt trong sách dịch đương đại" thu hút 300+ người tham dự'
    ]
  }
];

export const PUBLISHING_SERVICES: PublishingService[] = [
  {
    id: 'tham-dinh-ban-thao',
    title: 'Thẩm định Bản thảo',
    tagline: 'Manuscript Appraisal & Reader Report',
    description: 'Đánh giá khách quan, toàn diện và sâu sát về tiềm năng nội dung, cấu trúc tác phẩm, tính khả thi trên thị trường xuất bản Việt Nam cũng như chiến lược gửi NXB phù hợp.',
    scope: [
      'Báo cáo thẩm định chi tiết 10–15 trang phân tích ưu/nhược điểm cốt lõi',
      'Nhận định thị trường mục tiêu và định vị phân khúc độc giả',
      'Khuyến nghị cụ thể về tuyến nhân vật, nhịp điệu kể chuyện hoặc lập luận khảo cứu'
    ],
    deliverable: 'Bản nhận xét phản biện chuyên sâu kèm lộ trình hoàn thiện bản thảo'
  },
  {
    id: 'bien-tap-chuyen-sau',
    title: 'Biên tập Bản thảo Chuyên sâu',
    tagline: 'Developmental & Comprehensive Line Editing',
    description: 'Đồng hành từng câu chữ cùng tác giả. Can thiệp có nguyên tắc vào cấu trúc logic, tinh chỉnh văn phong, làm sạch ngữ pháp và tôn vinh giọng điệu cá nhân độc đáo.',
    scope: [
      'Biên tập cấu trúc (Developmental editing): mạch truyện, nhịp điệu, các chương hồi',
      'Biên tập câu chữ (Line editing): nhạc tính của từ ngữ, sự sắc sảo trong diễn đạt',
      'Hiệu đính đối chiếu thuật ngữ chuyên ngành (Fact-checking & Terminology)'
    ],
    deliverable: 'Bản thảo hoàn thiện với 2 lượt rà soát đối thoại trực tiếp tác giả'
  },
  {
    id: 'dich-thuat-van-hoc',
    title: 'Dịch thuật Văn học & Học thuật',
    tagline: 'Literary & Scholarly Translation (EN/FR → VI)',
    description: 'Chuyển ngữ các tác phẩm từ tiếng Anh và tiếng Pháp sang tiếng Việt với sự chuẩn xác học thuật kết hợp cùng vẻ đẹp thanh thoát, tự nhiên của ngôn ngữ bản địa.',
    scope: [
      'Văn học kinh điển và đương đại đoạt giải quốc tế',
      'Sách khảo cứu triết học, lịch sử, văn hóa và mỹ thuật học',
      'Xây dựng bảng thuật ngữ chuyên sâu (Glossary) và hệ thống chú giải ngữ cảnh'
    ],
    deliverable: 'Bản dịch tiếng Việt chỉn chu, sẵn sàng chuyển giao cho nhà xuất bản'
  },
  {
    id: 'tu-van-xuat-ban',
    title: 'Cố vấn Phát triển Xuất bản',
    tagline: 'Publishing Strategy & Project Management',
    description: 'Tư vấn trọn gói cho tác giả độc lập, tổ chức văn hóa hoặc doanh nghiệp muốn xuất bản ấn phẩm chất lượng cao đạt chuẩn lưu hành toàn quốc.',
    scope: [
      'Định hướng format sách, tiêu chuẩn giấy in, bìa áo và quy cách mỹ thuật',
      'Kết nối làm việc với các nhà xuất bản uy tín để xin giấy phép xuất bản hợp pháp',
      'Lập kế hoạch phát hành, truyền thông văn hóa và tọa đàm ra mắt sách'
    ],
    deliverable: 'Hồ sơ dự án xuất bản hoàn chỉnh từ ý niệm đến cuốn sách trên kệ'
  }
];

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'bi-mat-khoang-trang',
    title: 'Khoảng lặng giữa hai dấu câu và đạo hạnh của người biên tập',
    subtitle: 'Nghĩ về sự tiết chế của người làm chữ trong thời đại bội thực thông tin',
    date: 'Tháng 11, 2024',
    readTime: '6 phút đọc',
    category: 'Tiểu luận nghề nghiệp',
    summary: 'Khi người đọc gấp một cuốn sách lại và thốt lên: "Câu văn của tác giả này tự nhiên quá!", đó là lời ngợi khen lớn nhất dành cho người biên tập – người đã đứng khuất sau bóng tối để câu chữ tự tỏa sáng.',
    fullContent: [
      'Nghề biên tập sách, suy cho cùng, là một nghệ thuật ẩn mình. Trong một xã hội nơi ai cũng muốn cất tiếng thật to và giành lấy sự chú ý, người biên tập lại tình nguyện làm người gác cổng thầm lặng.',
      'Nhiều người lầm tưởng công việc của biên tập viên là sửa cho đúng ngữ pháp và lỗi chính tả. Nhưng đó chỉ là lớp áo ngoài cùng. Nhiệm vụ cốt tủy của biên tập là lắng nghe tần số rung động của bản thảo. Một cuốn sách hay có nhịp tim riêng: có những đoạn dồn dập như tiếng nước xiết, có những đoạn lại ngưng đọng như mặt hồ mùa đông.',
      'Sự can thiệp thô bạo nhất của người biên tập là áp đặt vốn từ và thói quen hành văn của chính mình lên đứa con tinh thần của tác giả. Giữ được sự trung thực với tiếng nói nguyên bản, đồng thời nhặt đi những hạt sỏi làm vấp chân người đọc — đó là ranh giới mong manh giữa sự lành nghề và tính trịch thượng.',
      'Một dấu phẩy đặt sai chỗ có thể làm gãy một mạch cảm xúc. Một từ dùng quá hoa mỹ có thể làm hỏng cả sự chân chất của câu chuyện. Bởi vậy, mỗi trang sách qua tay không chỉ cần con mắt tinh tường của một thợ thủ công, mà còn cần sự điềm tĩnh và lòng trắc ẩn của một người đồng hành trung tín.'
    ]
  },
  {
    id: 'chuyen-ngu-tam-hon',
    title: 'Dịch thuật không phải là sao chép từ điển, mà là tái sinh một linh hồn',
    subtitle: 'Những trăn trở khi chuyển ngữ văn chương thế giới sang tiếng Việt đương đại',
    date: 'Tháng 8, 2024',
    readTime: '8 phút đọc',
    category: 'Góc dịch giả',
    summary: 'Mỗi ngôn ngữ là một thế giới quan độc nhất. Khi dịch một câu văn từ tiếng Anh hay tiếng Pháp sang tiếng Việt, ta không chỉ dịch nghĩa đen của từ, mà đang bứng một cành hoa từ đất này sang ươm trồng trong thổ nhưỡng khác.',
    fullContent: [
      'Có những từ trong tiếng Việt mang một trường cảm giác kỳ lạ mà không từ điển song ngữ nào gom hết được. Chẳng hạn như từ "chênh chao", "man mác", "vương vít". Ngược lại, có những khái niệm phương Tây như "serendipity", "saudade" hay "understatement" đòi hỏi người dịch phải lục tung cả kho tàng ca dao, văn phong cổ điển lẫn khẩu ngữ đời sống để tìm ra sự tương thích tâm lý.',
      'Một dịch giả tồi nhìn thấy văn bản gốc như một chuỗi chướng ngại vật cần mã hóa máy móc. Một dịch giả có tâm lại nhìn thấy sau từng con chữ là nhịp thở, là ánh mắt ngập ngừng của nhân vật, là không khí của một buổi chiều mưa ở Dublin hay một quán cà phê bên bờ sông Seine.',
      'Bản dịch thành công là bản dịch khiến người đọc cảm thấy như tác giả nguyên bản đang thì thầm bằng chính thứ tiếng Việt nhuần nhuyễn, thanh thoát mà không hề đánh mất đi phong vị dị biệt của nền văn hóa nguồn.'
    ]
  },
  {
    id: 'suc-song-sach-giay',
    title: 'Vì sao một trang giấy đẹp vẫn khiến lòng người chậm lại?',
    subtitle: 'Vật tính của cuốn sách và trải nghiệm xúc giác không thể số hóa',
    date: 'Tháng 4, 2024',
    readTime: '5 phút đọc',
    category: 'Văn hóa đọc',
    summary: 'Trước những màn hình phát sáng liên tục nhấp nháy, cuốn sách in bằng giấy ngà, đóng gáy vuông vức là nơi chốn trú ẩn an toàn cuối cùng cho sự tập trung sâu sắc của nhân loại.',
    fullContent: [
      'Chúng ta đang sống trong một thời đại của những dòng cuộn vô tận (infinite scroll). Mắt ta lướt qua hàng nghìn mẩu thông tin mỗi ngày nhưng tâm trí lại đói khát sự trọn vẹn.',
      'Một cuốn sách in mang một "thể xác" cụ thể: độ nặng của nó trên tay, tiếng sột soạt nhẹ nhàng khi lật một trang mới, mùi của mực in và sợi xenluloze. Những yếu tố xúc giác ấy không đơn thuần là hoài niệm lãng mạn. Chúng là những điểm neo thần kinh (neural anchors) giúp tâm trí ta nhận thức được không gian và thời gian của việc đọc.',
      'Làm một cuốn sách đẹp — từ việc chọn cỡ chữ 10.5pt, khoảng cách dòng 1.55, cho đến việc để lề ngoài rộng hơn lề trong để ngón tay người đọc không che khuất dòng chữ — chính là hành vi tôn trọng phẩm giá của độc giả.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Linh Đặng là một trong số rất hiếm hoi những biên tập viên có khả năng nhìn thấu ý đồ cốt lõi của tác giả ngay từ bản thảo thô sơ nhất. Sự nhạy cảm ngôn ngữ và thái độ làm việc mực thước của Linh đã nâng đỡ cuốn sách của tôi lên một tầm vóc hoàn toàn mới.',
    author: 'TS. Nguyễn Văn Hùng',
    title: 'Nhà nghiên cứu văn hóa & Tác giả sách',
    affiliation: 'Hội đồng Khoa học Văn học'
  },
  {
    id: 't-2',
    quote: 'Mỗi lần giao một bản thảo dịch khó cho Linh Đặng hiệu đính, ban biên tập chúng tôi luôn hoàn toàn an tâm. Linh hiểu rõ từng sắc thái văn phạm, có sự kiên nhẫn vô biên với các thuật ngữ hóc búa và luôn giữ được nhịp văn êm ái, thuần Việt.',
    author: 'Trần Thị Mai Khanh',
    title: 'Trưởng ban Sách Quốc tế',
    affiliation: 'Nhà xuất bản uy tín tại Hà Nội'
  },
  {
    id: 't-3',
    quote: 'Bản dịch của Linh Đặng không chỉ trung thành với tác phẩm của chúng tôi mà còn truyền tải được trọn vẹn chất thơ và nỗi u uất đặc trưng. Một sự hợp tác mẫu mực giữa tác giả và dịch giả quốc tế.',
    author: 'Đại diện Bản quyền Tác giả',
    title: 'Văn phòng Văn học Á – Âu',
    affiliation: 'Paris / Seoul Agency'
  }
];
