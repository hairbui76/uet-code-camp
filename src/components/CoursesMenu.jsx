import { useState } from "react";
import {
	Menu,
	Typography,
	Space,
	List,
	Collapse,
	Button,
	Row,
	Col,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const { Panel } = Collapse;

import { COURSES_MENU_LIST, COURSES_LIST } from "@/constants";

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

const Course = ({ course }) => {
	return (
		<Row gutter={[0, 5]} style={{ padding: "5rem" }}>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={3} className="no-margin-bottom">
					{COURSES_LIST[course]["title"]}
				</Typography.Title>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Text style={{ fontStyle: "italic" }}>
					{COURSES_LIST[course]["short"]}
				</Typography.Text>
			</Col>
			<Col xs={24}>
				<Typography.Text>
					<b>Mức độ: </b>
					{COURSES_LIST[course]["level"]}
				</Typography.Text>
			</Col>
			<Col xs={24}>
				<Typography.Paragraph>
					<b>Mô tả: </b>
					{COURSES_LIST[course]["description"]}
				</Typography.Paragraph>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Người hướng dẫn
				</Typography.Title>
			</Col>
			{COURSES_LIST[course]["teachers"].map((teacher) => (
				<Row>
					<Col xs={24}>
						<Typography.Text>
							<b>Họ tên: </b>
							{teacher["name"]}
						</Typography.Text>
					</Col>
					{teacher["experience"] && (
						<Col xs={24}>
							<Typography.Text>
								<b>Kinh nghiệm: </b>
								{teacher["experience"]}
							</Typography.Text>
						</Col>
					)}
					{teacher["business"] && (
						<Col xs={24}>
							<Typography.Text>
								<b>Công tác: </b>
								{teacher["business"]}
							</Typography.Text>
						</Col>
					)}
					{teacher["prizes"] && (
						<Col xs={24}>
							<Typography.Text>
								<b>Thành tích nổi bật: </b>
							</Typography.Text>
							<List
								dataSource={teacher["prizes"]}
								renderItem={(prize) => (
									<List.Item
										style={{ borderBlockEnd: "none", marginBottom: 0 }}>
										<Button
											type="link"
											style={{
												color: "black",
												cursor: "default",
												display: "flex",
												alignItems: "center",
												color: "white",
											}}
											icon={
												<FontAwesomeIcon
													icon={faCircle}
													style={{ margin: "0px 5px", fontSize: "0.25rem" }}
												/>
											}>
											{prize}
										</Button>
									</List.Item>
								)}
							/>
						</Col>
					)}
					<Col xs={24} style={colAllCenter}>
						<Typography.Paragraph>
							<b>Giới thiệu: </b>
							{teacher["description"]}
						</Typography.Paragraph>
					</Col>
				</Row>
			))}
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Chương trình học
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<List
					dataSource={COURSES_LIST[course]["lectures"]}
					renderItem={(lecture) => (
						<Collapse ghost>
							<Panel
								header={
									<Typography.Title level={5} className="no-margin-bottom">
										{lecture["title"]}
									</Typography.Title>
								}>
								<List
									dataSource={lecture["lessons"]}
									size="small"
									renderItem={(lesson) => (
										<List.Item style={{ borderBlockEnd: "none" }}>
											<Button
												type="text"
												style={{
													display: "flex",
													alignItems: "center",
												}}
												icon={
													<FontAwesomeIcon
														icon={faCircle}
														style={{
															margin: "0px 5px",
															fontSize: "0.25rem",
														}}
													/>
												}>
												{lesson}
											</Button>
										</List.Item>
									)}
								/>
							</Panel>
						</Collapse>
					)}
				/>
			</Col>
			<Col xs={24} style={colAllCenter}>
				<Typography.Title level={5} className="no-margin-bottom">
					Mục tiêu
				</Typography.Title>
			</Col>
			<Col xs={24}>
				<List
					dataSource={COURSES_LIST[course]["goals"]}
					size="small"
					renderItem={(goal) => (
						<List.Item style={{ borderBlockEnd: "none" }}>
							<Button
								type="text"
								style={{
									display: "flex",
									alignItems: "center",
								}}
								icon={
									<FontAwesomeIcon
										icon={faCircle}
										style={{ margin: "0px 5px", fontSize: "0.25rem" }}
									/>
								}>
								{goal}
							</Button>
						</List.Item>
					)}
				/>
			</Col>
		</Row>
	);
};

const CoursesMenu = () => {
	const [course, setCourse] = useState("nodejs");
	return (
		<Space direction="vertical">
			<div className="courses-menu__container">
				<Menu
					onClick={(e) => setCourse(e.key)}
					items={COURSES_MENU_LIST.map((course) => ({
						label: (
							<Typography.Title level={5}>{course["label"]}</Typography.Title>
						),
						key: course["key"],
					}))}
					selectedKeys={[course]}
					mode="horizontal"
					className="custom-bg"
					style={{ padding: "0 5rem", backgroundColor: "#261c3d" }}
				/>
			</div>
			<Course course={course} />
		</Space>
	);
};

export default CoursesMenu;
