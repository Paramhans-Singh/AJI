// import { Timeline, Text } from '@mantine/core';
// import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';
// import '../styles/Scheduler.css'

// import React from 'react'

// const Scheduler = () => {
//   return (
//     <Timeline active={1} bulletSize={24} lineWidth={2} className='timeline'>
//       <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch" className='timelineItems'>
//         <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
//         <Text size="xs" mt={4}>2 hours ago</Text>
//       </Timeline.Item>

//       <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits" className='timelineItems'>
//         <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
//         <Text size="xs" mt={4}>52 minutes ago</Text>
//       </Timeline.Item>

//       <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed" className='timelineItems'>
//         <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
//         <Text size="xs" mt={4}>34 minutes ago</Text>
//       </Timeline.Item>

//       <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />} className='timelineItems'>
//         <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
//         <Text size="xs" mt={4}>12 minutes ago</Text>
//       </Timeline.Item>
//       <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch" className='timelineItems'>
//         <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
//         <Text size="xs" mt={4}>2 hours ago</Text>
//       </Timeline.Item>

//       <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits" className='timelineItems'>
//         <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
//         <Text size="xs" mt={4}>52 minutes ago</Text>
//       </Timeline.Item>

//       <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed" className='timelineItems'>
//         <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
//         <Text size="xs" mt={4}>34 minutes ago</Text>
//       </Timeline.Item>

//       <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />} className='timelineItems'>
//         <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
//         <Text size="xs" mt={4}>12 minutes ago</Text>
//       </Timeline.Item>
//     </Timeline>
//   )
// }

// export default Scheduler
import React from "react";
import '../styles/Scheduler.css'

 const Scheduler = () => {
  return (
    <div className="frame">
      <div className="schedule">
        <div className="div">
          <div className="task">
            <div className="overlap-group">
              <div className="body">
                <div className="bg" />
              </div>
              <div className="time">
                <img className="vector" alt="Vector" src="vector.svg" />
                <div className="text-wrapper">12:30 - 13:50</div>
              </div>
              <div className="text-wrapper-2">State V/s Jolly LLB</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="bg-wrapper">
                <div className="bg-2" />
              </div>
              <div className="time-2">
                <img className="img" alt="Vector" src="image.svg" />
                <div className="text-wrapper-3">10:30 - 11:50</div>
              </div>
              <div className="text-wrapper-4">Mahesh V/s Rahul Garg</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="div-wrapper">
                <div className="bg-3" />
              </div>
              <div className="time-3">
                <img className="img" alt="Vector" src="vector-2.svg" />
                <div className="text-wrapper-5">09:00 - 10:20</div>
              </div>
              <p className="p">Alok Sharma V/s Central Gov</p>
            </div>
          </div>
        </div>
        <div className="time-4">
          <div className="text-wrapper-6">09:00</div>
          <div className="text-wrapper-7">10:00</div>
          <div className="text-wrapper-8">11:00</div>
          <div className="text-wrapper-9">12:00</div>
          <div className="text-wrapper-10">13:00</div>
          <div className="text-wrapper-11">14:00</div>
          <div className="text-wrapper-12">15:00</div>
          <div className="text-wrapper-13">16:00</div>
          <div className="text-wrapper-14">17:00</div>
          <div className="text-wrapper-15">18:00</div>
        </div>
      </div>
      <div className="overlap-3">
        <div className="rectangle" />
        <div className="ellipse" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="ellipse-4" />
        <div className="ellipse-5" />
      </div>
    </div>
  );
};

export default Scheduler;