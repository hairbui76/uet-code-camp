import { Typography, Space, Button, Row, Col, ConfigProvider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { AppContext } from "@/contexts";
import { useContext } from "react";
import { Link } from "react-router-dom";

const btnStyle = {
	display: "flex",
	alignItems: "center",
};

const colAllCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const colAlignCenter = {
	display: "flex",
	alignItems: "center",
};

const colJustifyCenter = {
	display: "flex",
	justifyContent: "center",
};

const CustomBtnWithIcon = ({ title, icon, href = null }) => (
	<Button
		style={{ ...btnStyle, padding: "1rem", height: "fit-content" }}
		href={href}
		icon={<FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />}
		type="text">
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: "0.5rem",
			}}>
			{title.split("\n").map((text, i) => (
				<Typography.Text key={i} style={{ opacity: 0.7 }}>
					{text}
				</Typography.Text>
			))}
		</div>
	</Button>
);

const Contact = () => {
	const { headerHeight, viewPort, isDesktop } = useContext(AppContext);
	return (
		<ConfigProvider theme={{ token: { fontSize: "1.25rem" } }}>
			<Row gutter={[0, 16]}>
				<Col
					md={24}
					style={{ ...colAllCenter, height: viewPort.height - headerHeight }}>
					<Row
						style={{
							paddingLeft: isDesktop ? "5rem" : "2rem",
							paddingRight: isDesktop ? "5rem" : "2rem",
						}}>
						<Col
							xs={24}
							style={{
								...colAllCenter,
							}}>
							<Typography.Title
								className="center-text"
								level={isDesktop ? 2 : 4}
								style={{ fontSize: "3rem" }}>
								Thông tin liên hệ
							</Typography.Title>
						</Col>
						<Col xs={24} style={colAllCenter}>
							<Row gutter={[64, isDesktop ? 64 : 0]}>
								<Col xs={24} md={12} style={colAllCenter}>
									<CustomBtnWithIcon
										icon={faLocationDot}
										title={
											"Câu lạc bộ thư viện hội sinh viên,\nĐại học Công nghệ - ĐHQGHN"
										}
									/>
								</Col>
								<Col xs={24} md={12} style={colAllCenter}>
									<Space direction="vertical">
										<CustomBtnWithIcon
											icon={faEnvelope}
											title="uetcodecamp@gmail.com"
										/>
										<CustomBtnWithIcon
											icon={faPhone}
											title="036 775 0975 - Mr. Bá"
										/>
										<CustomBtnWithIcon
											icon={faFacebook}
											title="Facebook UET Code Camp"
											href="https://www.facebook.com/UETCodeCamp"
										/>
										<CustomBtnWithIcon
											icon={faFacebookSquare}
											title="Facebook Câu lạc bộ thư viện hội sinh viên"
											href="https://www.facebook.com/TVHSV.UET"
										/>
									</Space>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col
					md={24}
					style={{
						...colAllCenter,
						height: viewPort.height - headerHeight,
						backgroundColor: "#382a5e",
						paddingLeft: "2rem",
						paddingRight: "2rem",
					}}
					className="custom-bg_1">
					<Row gutter={[0, 32]}>
						<Col xs={24} style={colAllCenter}>
							<Typography.Title
								className="center-text no-margin-bottom"
								style={{ fontSize: "3rem" }}>
								Tham gia UET Code Camp
							</Typography.Title>
						</Col>
						<Col xs={24} style={colAllCenter}>
							<div className="center-text">
								<Typography.Text style={{ opacity: 0.7 }}>
									Khám phá công nghệ mới, thu lượm kỹ năng về phát triển phần
									mềm, tại sao không?
								</Typography.Text>
							</div>
						</Col>
						<Col xs={24} style={colAllCenter}>
							<div className="button__container">
								<Link to="https://docs.google.com/forms/d/e/1FAIpQLSdSCbquJUboHevq-N-WeokievODPbGIvdKh2Q078GUihswn5w/viewform">
									<Button
										type="primary"
										style={{
											justifyContent: "center",
											fontWeight: "bold",
											padding: "2rem 3rem 4rem",
											fontSize: "2rem",
										}}
										size="large">
										ĐĂNG KÝ NGAY
									</Button>
								</Link>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</ConfigProvider>
	);
};

export default Contact;
