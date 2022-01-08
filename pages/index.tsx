import { motion } from "framer-motion";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { fadeInUp, stagger, routerAnimation } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Getday } from "../components/getday";

const index: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Getday />
      <h5 className="my-3 text-lg font-medium text-justify">
        Electrical and electronics engineering Bachelor Degree, Automation and
        Robotics engineering Masters Degree, As of now, i am focused on machine
        learning and web application development. I have 3+ years of ECMAScript
        work experince and knowledge on Java & Python. Focusing on responsive,
        web and mobile applications by using new, promising frameworks. I have
        huge interest on following new technologies, innovations and
        implementing them on older out-dated applications.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-100 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-1 text-xl font-semibold tracking-wide">
          {" "}
          Responsibilities{" "}
        </h4>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-1 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

//!called every time  the page refreshed
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  /*
  const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  const data = await res.json();
  console.log(data);
  */
  return { props: { endpoint: process.env.VERCEL_URL } };
};

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default index;
