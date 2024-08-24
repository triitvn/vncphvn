import React from 'react';
import { PhotoTabs } from './../../../../shared/components/PhotoTabs';

const photoTabsData = [
  {
    title: "Lorem ipsum dolor sit amet",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    photoAlignment: 'left',
    accentbarAlignment: 'right',
    imgUrl: 'https://i.imgur.com/hSMTD8O.jpeg',
    items: [
      { title: 'Trung tâm Pali học' },
      { title: 'Trung tâm Phật học Sanskrit' },
      { title: 'Trung tâm nghiên cứu Phật giáo Việt Nam' },
      { title: 'Trung tâm nghiên cứu Nữ giới Phật giáo' }
    ]
  },
  {
    title: "Lorem ipsum dolor sit amet",
    imgUrl: 'https://i.imgur.com/5VzpW19.jpeg',
    photoAlignment: 'right',
    accentbarAlignment: 'left',
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    items: [
      { title: 'Trung tâm nghiên cứu Phật giáo Hán truyền' },
      { title: 'Trung tâm nghiên cứu và ứng dụng thiền học Nam truyền' },
      { title: 'Trung tâm nghiên cứu và ứng dụng thiền học Bắc truyền' },
      { title: 'Trung tâm nghiên cứu Văn học Phật giáo Việt Nam' }
    ]
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    imgUrl: 'https://i.imgur.com/RdyKUc8.jpeg',
    photoAlignment: 'left',
    accentbarAlignment: 'right',
    items: [
      { title: 'Trung tâm phiên dịch Hán Nôm Huệ Quang' },
      { title: 'Trung tâm nghiên cứu tôn giáo' },
      { title: 'Trung tâm Phiên dịch Anh-Việt Phật học' },
      { title: 'Trung tâm nghiên cứu và dịch thuật' }
    ]
  }
];

export const ResearchCenters = () => {
  return (
    <section className="HeadlineTextBold_container__1RnDP single-col-inner">
      <h2 className="HeadlineTextBold_title__MxSRh">Các trung tâm nghiên cứu</h2>
      {photoTabsData.map((photoTabs, index) => (
        <PhotoTabs key={index} photoTabs={photoTabs} />
      ))}
    </section>
  );
};
