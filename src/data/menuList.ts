import { SectionName } from '@const/index';

const menuList = [
  {
    text: '來新莊進香 →',
    anchor: SectionName.STORY,
    fn: undefined,
  },
  {
    text: '收集七種香火 →',
    anchor: SectionName.TEMPLES,
    fn: undefined,
  },
  {
    text: '香客交流活動 →',
    anchor: SectionName.EVENTS,
    fn: undefined,
  },
  {
    text: '進香地圖 →',
    anchor: SectionName.MAP,
    fn: undefined,
  },
  {
    text: '進香注意事項 →',
    anchor: SectionName.NOTICE,
    fn: undefined,
  },
  {
    text: '更多系列活動 →',
    anchor: undefined,
    fn: () =>
      window.open(
        'https://www.culture.ntpc.gov.tw/',
        'rel="noopener noreferrer", target="_blank"'
      ),
  },
];

export default menuList;
