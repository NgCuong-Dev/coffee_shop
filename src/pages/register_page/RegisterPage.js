import { Button, Form, Input, Select, message } from "antd";

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log(values);
    // userServ
    //   .register(values)
    //   .then((res) => {
    //     message.success("Đăng Ký Thành Công");
    //     dispatch({
    //       type: SET_USER_REGISTER,
    //       payload: res.data.content,
    //     });
    //     localUserServ.setRegister(res.data.content);
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     message.error(err.response.data.content);
    //   });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="p-20 px-60 w-screen h-screen bg-gradient-to-r from-black via-blue-400 to-pink-300 lg:h-full ">
      <div className=" w-full bg-white p-20 flex justify-center flex-col items-center rounded-lg font-medium ">
        <h1>Sign Up</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 10,
          }}
          className="w-full ml-80 mt-10"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* ----------------------------- */}
          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/* -------------------------------------- */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          {/* ---------------------------------------- */}
          <Form.Item
            label="Số Điện Thoại"
            name="soDt"
            rules={[
              {
                required: true,
                message: "Please input your telephone number!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          {/* ----------------------------------------- */}
          <Form.Item
            label="Họ Tên"
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Please input your fullname 6!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          {/* ------------------------------------------- */}
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 10,
            }}
          >
            <Button
              danger
              type="primary"
              className="bg-green font-bold"
              htmlType="submit"
            >
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default RegisterPage;
