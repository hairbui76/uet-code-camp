import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBlog,
	faHouse,
	faRoad,
	faAddressCard,
	faComments,
	faClock,
	faBookOpenReader,
	faPenToSquare,
	faRocket,
	faVrCardboard,
	faGraduationCap,
	faPeopleGroup,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "@ant-design/icons";
import {
	faFacebook,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const FacebookIcon = () => <FontAwesomeIcon icon={faFacebook} />;
const FacebookSquareIcon = () => <FontAwesomeIcon icon={faFacebookSquare} />;
const FacebookCustomIcon = () => <Icon component={FacebookIcon} />;
const FacebookSquareCustomIcon = () => <Icon component={FacebookSquareIcon} />;

const CustomIcon = (icon, color = "white") => (
	<FontAwesomeIcon
		className="padding-right-10"
		color={color}
		style={{ opacity: 0.7 }}
		icon={icon}
	/>
);

const MENU_BUTTONS_LIST = {
	"Trang chủ": {
		href: "/",
		icon: (color) => CustomIcon(faHouse, color),
	},
	"Lộ trình": {
		href: "/roadmap",
		icon: (color) => CustomIcon(faRoad, color),
		children: {
			"Thời gian": {
				href: "/roadmap",
				icon: (color) => CustomIcon(faClock, color),
			},
			"Các khoá học": {
				href: "/courses",
				icon: (color) => CustomIcon(faBookOpenReader, color),
			},
		},
	},
	"Về chúng tôi": {
		href: "/about",
		icon: (color) => CustomIcon(faAddressCard, color),
	},
	Blog: {
		href: "/blog",
		icon: (color) => CustomIcon(faBlog, color),
	},
	"Liên hệ": {
		href: "/contact",
		icon: (color) => CustomIcon(faComments, color),
	},
};

const REGISTER_BUTTON = {
	"Đăng ký ngay": {
		href: "https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform",
		icon: (color) => CustomIcon(faPenToSquare, color),
	},
};

const INTRODUCES = [
	{
		title: "Công nghệ mới",
		description:
			"Những chủ đề của Code Camp hướng tới những công nghệ nóng, mới mẻ.",
		icon: <FontAwesomeIcon size="2x" color="white" icon={faRocket} />,
	},
	{
		title: "Ứng dụng thực tế",
		description:
			"Sử dụng kiến thức thu lượm được vào việc phát triển ứng dụng, có khả năng áp dụng thực tế.",
		icon: <FontAwesomeIcon size="2x" color="white" icon={faVrCardboard} />,
	},
	{
		title: "Điểm nhấn cho CV",
		description:
			"Khi tham gia Code Camp, ngoài học được những kiến thức, thí sinh còn nhận được Certificate từ Ban tổ chức. Đây cũng chính là một điểm nhấn trong CV giúp các bạn ghi điểm trong mắt nhà tuyển dụng.",
		icon: <FontAwesomeIcon size="2x" color="white" icon={faStar} />,
	},
	{
		title: "Tự tìm hiểu",
		description:
			"Tham gia Code Camp, bạn có cơ hội tự tìm hiểu công nghệ, dưới sự giúp đỡ của người hướng dẫn và trợ giảng.",
		icon: <FontAwesomeIcon size="2x" color="white" icon={faGraduationCap} />,
	},
	{
		title: "Làm việc nhóm",
		description:
			"Nâng cao kĩ năng làm việc nhóm của bạn thông qua các sự kiện nhỏ hơn được tổ chức theo nhóm.",
		icon: <FontAwesomeIcon size="2x" color="white" icon={faPeopleGroup} />,
	},
	{
		title: "Hỗ trợ",
		description:
			"Đồng hành với mỗi camp là các anh/chị có kinh nghiệm trong lĩnh vực công nghệ của họ. Có khát khao chia sẻ, giúp đỡ thế hệ trẻ hơn mình.",
		icon: <FontAwesomeIcon size="2x" color="white" icon={faComments} />,
	},
];

export {
	MENU_BUTTONS_LIST,
	REGISTER_BUTTON,
	INTRODUCES,
	FacebookCustomIcon,
	FacebookSquareCustomIcon,
};
