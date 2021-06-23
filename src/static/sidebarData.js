import {
  LineStyle,
  TrendingUp,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  Equalizer,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';
export const sidebarData = [
  {
    title: 'Dashboard',
    sidebarList: [
      {
        id: 0,
        name: 'Home',
        component: LineStyle,
        styleName: 'active',
      },
      {
        id: 1,
        name: 'Analytic',
        component: Timeline,
      },
      {
        id: 2,
        name: 'Sales',
        component: TrendingUp,
      },
    ],
  },
  {
    title: 'Quick Menu',
    sidebarList: [
      {
        id: 0,
        name: 'User',
        component: PermIdentity,
      },
      {
        id: 1,
        name: 'Product',
        component: Storefront,
      },
      {
        id: 2,
        name: 'Transaction',
        component: AttachMoney,
      },
      {
        id: 3,
        name: 'Reports',
        component: Equalizer,
      },
    ],
  },
  {
    title: 'Notification',
    sidebarList: [
      {
        id: 0,
        name: 'Mail',
        component: MailOutline,
      },
      {
        id: 1,
        name: 'Feedback',
        component: DynamicFeed,
      },
      {
        id: 2,
        name: 'Message',
        component: ChatBubbleOutline,
      },
    ],
  },
  {
    title: 'Staff',
    sidebarList: [
      {
        id: 0,
        name: 'Manage',
        component: WorkOutline,
      },
      {
        id: 1,
        name: 'Reports',
        component: Report,
      },
    ],
  },
];
