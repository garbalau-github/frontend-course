import { Skills, SkillsType } from '../../../data';
import Navigation from '../../components/Navigation/Navigation';

import Link from '../../svg/Link';

import styles from './Profile.module.css';
import { motion, Variants } from 'framer-motion';

const Sidebar: Variants = {
  offscreen: { width: '0%', opacity: 0 },
  onscreen: {
    width: '380px',
    opacity: 1,
    transition: { type: 'spring', bounce: 0, duration: 2 },
  },
};

const SidebarText: Variants = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0, delay: 1.3, duration: 2 },
  },
};

const SkillTitle: Variants = {
  offscreen: { x: -150, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.5, duration: 2 },
  },
};

const Text: Variants = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0, duration: 1 },
  },
};

const Profile = () => {
  return (
    <>
      <Navigation />
      <div className={styles.ProfileWrapper}>
        <motion.div
          className={styles.Sidebar}
          variants={Sidebar}
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h2 variants={SidebarText}>Nick Garbalau</motion.h2>
          <br />
          <motion.p variants={SidebarText}>
            I have 5 years of experience in modern development. Mainly I
            concentrate on frontend, however, I am also competent with backend
            on Node.js. I prefer to build software with performance, scalability
            and maintainability in mind.
          </motion.p>

          <motion.p variants={SidebarText}>
            Likewise, I am looking for a company where I can share and exchange
            knowledge. I made a decision long ago, I choose to build amazing
            projects with amazing people.
          </motion.p>

          <br />
          <motion.h2 variants={SidebarText}>Personal Projects</motion.h2>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href='https://www.earthquiet.com/'
              target='_blank'
            >
              <div style={{ marginRight: '0.5rem', marginBottom: '0.1rem' }}>
                EARTHQUIET
              </div>
              <Link />
            </a>
          </motion.p>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href='https://garbalau-github.github.io/days-until.github.io/'
              target='_blank'
            >
              <div style={{ marginRight: '0.5rem', marginBottom: '0.1rem' }}>
                Days Untill
              </div>
              <Link />
            </a>
          </motion.p>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href='https://garbalau-blog.vercel.app/blog'
              target='_blank'
            >
              <div style={{ marginRight: '0.5rem', marginBottom: '0.1rem' }}>
                Markdown Blog
              </div>
              <Link />
            </a>
          </motion.p>
          <br />
          <motion.h2 variants={SidebarText}>Higher Education</motion.h2>
          <motion.p variants={SidebarText}>
            <span>Alecu Russo State University</span> <br />
            <span> Sep 2017 - Jun 2020 </span>
            <br />
            <span>Bachelor of Business Administration </span>
            <br />
          </motion.p>
          <br />
          <motion.h2 variants={SidebarText}>Hobbies</motion.h2>
          <motion.p variants={SidebarText}>
            <span>Traveling, Astronomy, Cooking, Gaming</span> <br />
          </motion.p>
        </motion.div>

        <motion.div className={styles.Content} initial={'offscreen'}>
          {Skills.map(({ title, description, keywords, id }: SkillsType) => {
            return (
              <div className={styles.SkillsWrapper} key={id}>
                <motion.div
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ staggerChildren: 0.5 }}
                  className={styles.SkillCard}
                >
                  <motion.h2
                    variants={SkillTitle}
                    className={styles.SkillTitle}
                  >
                    {title}
                  </motion.h2>
                  <motion.h3 variants={Text}>{description}</motion.h3>
                  <motion.p variants={Text}>{keywords}</motion.p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className={styles.RightSidebar}
          variants={Sidebar}
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h2 variants={SidebarText}>Work Experience</motion.h2>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href='https://www.linkedin.com/company/endava'
              target='_blank'
            >
              <span style={{ marginRight: '0.5rem' }}>Endava</span>
              <Link />
            </a>
            <span>Mar 2022 - Present</span> <br />
            <span>- UIs with React & styled-components</span> <br />
            <span>- Integration of React Query</span> <br />
            <span>- Collaborated on Guidelines & Design Kits</span> <br />
            <span>- Got involved in TDD & Unit Testing</span>
          </motion.p>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href='https://www.linkedin.com/company/3pillar-global'
              target='_blank'
            >
              <span style={{ marginRight: '0.5rem' }}>3Pillar Global</span>
              <Link />
            </a>
            <span>Aug 2021 - Mar 2022</span> <br />
            <span>- Complex Microservices Application</span> <br />
            <span>- Managed REST APIs with Node.js</span> <br />
            <span>- Applied SSR for React with Next.js</span> <br />
            <span>- Got familiar with Serverless & AWS</span> <br />
          </motion.p>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href='https://www.linkedin.com/company/est-computer'
              target='_blank'
            >
              <span style={{ marginRight: '0.5rem' }}>Est Computer</span>
              <Link />
            </a>
            <span>Jan 2021 - Aug 2021</span> <br />
            <span>- Migrated from AngularJS to Angular 11</span> <br />
            <span>- Built widgets using TypeScript & Charts</span> <br />
            <span>- Created library of reusable components</span> <br />
            <span>- Initiated and created Wiki for team members</span>
          </motion.p>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href=' https://www.linkedin.com/company/usalinksystem'
              target='_blank'
            >
              <span style={{ marginRight: '0.5rem' }}>USA Link System</span>
              <Link />
            </a>
            <span>Dec 2018 - Jan 2021</span> <br />
            <span>- Moved JavaScript codebase to ES6+ standard</span> <br />
            <span>- Built responsive design for all screen sizes</span> <br />
            <span>- Improved website performance up to 40%</span> <br />
            <span>- Guided two Junior developers</span>
          </motion.p>
          <motion.p variants={SidebarText}>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              href='https://www.linkedin.com/company/upwork'
              target='_blank'
            >
              <span style={{ marginRight: '0.5rem' }}>Upwork</span>
              <Link />
            </a>
            <span>Jun 2018 - Aug 2018</span> <br />
            <span>- Worked on Landings & Business Card Websites</span> <br />
            <span>- Built layouts with HTML5, CSS3, jQuery</span> <br />
            <span>- Experience with WordPress & Elementor</span> <br />
            <span>- Experience in cross-browser development</span>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
