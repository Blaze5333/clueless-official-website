import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: 'rgb(40, 46, 55)',
  borderRadius: 10,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowDropDownIcon sx={{ fontSize: '2.0rem', fontWeight: 'bold' }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgb(40, 46, 55)',
  border: '2px solid rgb(126, 231, 135)',
  borderRadius: 10,
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '& .MuiSvgIcon-root': {
    fill: 'black',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 10,
  borderTop: '1px solid rgb(23, 32, 42)',
}));

const Faq: NextPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="relative">
      <div className="green-gradient absolute z-0 opacity-70 sm:-right-52 right-0 top-72 sm:bottom-0"></div>
      <div className="green-gradient absolute z-0 opacity-70 top-40 -left-64 hidden sm:block"></div>
      <div className="green-gradient absolute z-0 top-40 right-96 opacity-70 scale-75 hidden sm:block"></div>
      <div>
        <Head>
          <title>ClueLess | FAQ</title>
          <meta name="description" content="Clueless FAQ Page" />
        </Head>
        {/* <Navbar /> */}
        <div className=" m-auto">
          <h1 className="mt-6 text-[#7EE787] font-raleway text-[28px] md:text-[36px] font-semibold leading-normal my-3 mb-4 md:text-[28]">
            Having Questions Try finding them below :
          </h1>
          {/* FAQ section */}
          <h1 className="font-raleway text-white text-[28px] md:text-[36px] font-semibold leading-normal my-3 md:text-[28]">
            FAQ
          </h1>
          {/* Accordion  */}
          <div className="flex  w-full flex-col lg:flex-row">
            <div className="">
              <div className="mt-3">
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expandIcon={
                      expanded === 'panel1' ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropDownIcon style={{ fill: 'white' }} />
                      )
                    }
                    sx={{
                      backgroundColor:
                        expanded === 'panel1' ? '#7EE787' : '#17202A',
                    }}
                  >
                    <h1
                      className={
                        expanded === 'panel1' ? 'text-black' : 'text-white'
                      }
                    >
                      1. What is Clueless?
                    </h1>
                  </AccordionSummary>
                  <AccordionDetails className="dark:bg-[#17202A]">
                    <Typography
                      className={
                        expanded === 'panel1'
                          ? 'text-white font-medium'
                          : 'text-black'
                      }
                    >
                      Clueless in a virtual open-source community built with the
                      motive of “Learn and Grow”. We, as a community, encourage
                      and guide enthusiasts to dive into the world of
                      open-source. We provide the best resources available on
                      the internet, write blogs that helps other to explore
                      their domain more deeply, organize events, GitHub
                      repositories, organize hackathons, and more couniting
                      activities.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                  className="mt-3"
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                    expandIcon={
                      expanded === 'panel2' ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropDownIcon style={{ fill: 'white' }} />
                      )
                    }
                    sx={{
                      backgroundColor:
                        expanded === 'panel2' ? '#7EE787' : '#17202A',
                    }}
                  >
                    <h1
                      className={
                        expanded === 'panel2' ? 'text-black' : 'text-white'
                      }
                    >
                      2. What do we provide?
                    </h1>
                  </AccordionSummary>
                  <AccordionDetails className="dark:bg-[#17202A]">
                    <Typography
                      className={
                        expanded === 'panel2'
                          ? 'text-white font-medium'
                          : 'text-balck'
                      }
                    >
                      Internet is flooded with so many resources that can make
                      one confused and clueless. So we, the Clueless Community
                      provide the best, filtered, and curated resources like
                      YouTube videos, GitHub repositories, websites,
                      cheatsheets, etc!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                  className="mt-3"
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    expandIcon={
                      expanded === 'panel3' ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropDownIcon style={{ fill: 'white' }} />
                      )
                    }
                    sx={{
                      backgroundColor:
                        expanded === 'panel3' ? '#7EE787' : '#17202A',
                    }}
                  >
                    <h1
                      className={
                        expanded === 'panel3' ? 'text-black' : 'text-white'
                      }
                    >
                      3. Do we have a community?
                    </h1>
                  </AccordionSummary>
                  <AccordionDetails className="dark:bg-[#17202A]">
                    <Typography
                      className={
                        expanded === 'panel3'
                          ? 'text-white font-medium'
                          : 'text-black'
                      }
                    >
                      Yes! we do have an amazing Discord community where you can
                      interact with other audiences, ask and help others. There
                      are different channels for every tech domain.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel4'}
                  onChange={handleChange('panel4')}
                  className="mt-3"
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                    expandIcon={
                      expanded === 'panel4' ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropDownIcon style={{ fill: 'white' }} />
                      )
                    }
                    sx={{
                      backgroundColor:
                        expanded === 'panel4' ? '#7EE787' : '#17202A',
                    }}
                  >
                    <h1
                      className={
                        expanded === 'panel4' ? 'text-black' : 'text-white'
                      }
                    >
                      4. Is it free?
                    </h1>
                  </AccordionSummary>
                  <AccordionDetails className="dark:bg-[#17202A]">
                    <Typography
                      className={
                        expanded === 'panel4'
                          ? 'text-white font-medium'
                          : 'text-black'
                      }
                    >
                      Yes! It is absolutely free.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="mt-6 mb-4 flex items-center">
                <h2 className="text-md  sm:text-lg text-white font-semibold mr-3">
                  Have Questions other than this?
                </h2>
                <Link href="/contact-us" passHref>
                  <button className="text-black font-semibold px-6 py-1 sm:px-10 sm:py-2 rounded bg-[#7EE787] hover:bg-[#3b9242]">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
            <div className=" lg:w-[50vw]  justify-center items-center hidden lg:flex mb-4 lg:ml-20 ">
              <img src="/faq1.png" className="w-72" alt="text" />
            </div>
            <div className=" lg:w-[50vw] flex justify-center items-center lg:hidden  lg:ml-20 ">
              <img
                src="/faq2.png"
                className="w-3/5 lg:w-full my-4"
                alt="text"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Faq;
