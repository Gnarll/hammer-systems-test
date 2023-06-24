import {
  DashboardOutlined,
  UserOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboard",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "dashboards-default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "sidenav.dashboard.default",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const pagesNavTree = [
  {
    key: "pages",
    path: `${APP_PREFIX_PATH}/pages`,
    title: "sidenav.pages",
    icon: UserOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "pages-clients",
        path: `${APP_PREFIX_PATH}/pages/clients`,
        title: "Clients",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "pages-map",
        path: `${APP_PREFIX_PATH}/pages/map`,
        title: "Map",
        icon: BorderOuterOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...pagesNavTree];

export default navigationConfig;
