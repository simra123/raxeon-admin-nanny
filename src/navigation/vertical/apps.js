import { Mail, MessageSquare, Octagon, BookOpen, Archive, Award, CheckSquare, Calendar, FileText, Circle, Codesandbox, Smartphone, Settings, User } from 'react-feather'
import {BiCategory} from 'react-icons/bi'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {CgAttribution, CgWebsite} from 'react-icons/cg'

export default [
  {
    header: 'General'
  },
  // {
  //   id: 'email',
  //   title: 'Email',
  //   icon: <Mail size={20} />,
  //   navLink: '/apps/email'
  // },
  // 
  // {
  //   id: 'todo',
  //   title: 'Todo',
  //   icon: <CheckSquare size={20} />,
  //   navLink: '/apps/todo'
  // },
  // {
  //   id: 'calendar',
  //   title: 'Calendar',
  //   icon: <Calendar size={20} />,
  //   navLink: '/apps/calendar'
  // },
  {
    id: 'services',
    title: 'Services',
    icon: <Award  size={20} />,
    children: [
      {
        id: 'add-new',
        title: 'Add new Service',
        icon: <Circle size={12} />,
        navLink: '/services/form'
      },
      {
        id: 'all-list',
        title: 'All Services',
        icon: <Circle size={12} />,
        navLink: '/services/list'
      }
    ]
  },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // },
  {
    id: 'Customers',
    title: 'Customers',
    icon: <User size={20} />,
    children: [
      {
        id: 'view-customer',
        title: 'Add new Customer',
        icon: <Circle size={12} />,
        navLink: '/customer/form'
      },
      {
        id: 'list-customer',
        title: 'Customer List',
        icon: <Circle size={12} />,
        navLink: '/customer/list'
      }
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/edit'
      // }
    ]
  },
  {
    id: 'Employee',
    title: 'Employee',
    icon: <User size={20} />,
    children: [
      {
        id: 'view-employee',
        title: 'Add new Employee',
        icon: <Circle size={12} />,
        navLink: '/employee/form'
      },
      {
        id: 'list-employee',
        title: 'Employee List',
        icon: <Circle size={12} />,
        navLink: '/employee/list'
      }
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/edit'
      // }
    ]
  },
  {
    id: 'category',
    title: 'Category',
    icon: <BiCategory size={20} />,
    children: [
      {
        id: 'view-category',
        title: 'Add new Category',
        icon: <Circle size={12} />,
        navLink: '/category/form'
      },
      {
        id: 'list-category',
        title: 'Category List',
        icon: <Circle size={12} />,
        navLink: '/category/list'
      }
    ]
  },
  {
    id: 'product',
    title: 'Product Form',
    icon: <MdOutlineProductionQuantityLimits size={20} />,
    children: [
      {
        id: 'view-product',
        title: 'Add new product',
        icon: <Circle size={12} />,
        navLink: '/product/form'
      }, 
      {
        id: 'list-product',
        title: 'product List',
        icon: <Circle size={12} />,
        navLink: '/product/list'
      },
      {
        id: 'colors',
        title: 'Colors',
        icon: <Circle size={12} />,
        navLink: '/product/colors'
      },
      {
        id: 'attribute',
        title: 'Attribute',
        icon: <CgAttribution size={20} />,
        children: [
          {
            id: 'name-attribute',
            title: 'Attribute Name',
            icon: <Circle size={12} />,
            navLink: '/attribute/name'
          },
          {
            id: 'value-attribute',
            title: 'Attribute Value',
            icon: <Circle size={12} />,
            navLink: '/attribute/value'
          }
          
        ]
      }
    ]
  },
    {
      id: 'bookings',
      title: 'Bookings',
      icon:<BookOpen  size={20} />,
      navLink: '/apps/user/list'
    },
    {
      id: 'chat',
      title: 'Chat',
      icon: <MessageSquare size={20} />,
      navLink: '/apps/chat'
    },
    {
      id: 'reviews',
      title: 'Service Reviews',
      icon: <Archive  size={12} />,
      navLink: '/apps/view'
    },
    

    {
      id: 'Products',
      title: 'Products',
      icon: <Octagon  size={12} />,
      navLink: '/apps'
    },
    {
      id: 'Orders',
      title: 'Orders',
      icon: <Octagon  size={12} />,
      navLink: '/user/view'
    },
    {
      id: 'Product Reviews',
      title: 'Product Reviews',
      icon: <Octagon  size={12} />,
      navLink: '/apps/view'
    },
    {
      id: 'Banners',
      title: 'Banners',
      icon: <CgWebsite  size={12} />,
      navLink: '/banners'
    },
    {
      id: 'pages',
      title: 'Pages',
      icon: <FileText size={20} />,
      navLink: '/page-setting'
    },
    {
      id: 'front-end',
      title: 'Front End',
      icon: <Codesandbox size={20} />,
      children: [
        {
          id: 'header',
          icon: <Circle size={12} />,
          title: 'Top Header',
          navLink: '/frontend/header',
          newTab: true
        },
        {
          id: 'about',
          icon: <Circle size={12} />,
          title: 'About Us',
          navLink: '/frontend/header',
          newTab: true
        },
        {
          id: 'work',
          icon: <Circle size={12} />,
          title: 'How it Works',
          permissions: ['admin', 'editor'],
          navLink: '/misc/coming-soon',
          newTab: true
        },
        {
          id: 'header',
          icon: <Circle size={12} />,
          title: 'Top Header',
          permissions: ['admin', 'editor'],
          navLink: '/misc/coming-soon',
          newTab: true
        },
        {
          id: 'application',
          title: 'Mobile Applications',
          icon: <Smartphone size={20} />,
          children: [
            {
              id: 'customer',
              title: 'For Customer',
              icon: <Circle size={12} />,
              permissions: ['admin', 'editor'],
              navLink: '/misc/comicng-soon',
              newTab: true
            },
            {
              id: 'employee',
              title: 'For Employees',
              icon: <Circle size={12} />,
              permissions: ['admin', 'editor'],
              navLink: '/misc/cooicng-soon',
              newTab: true
            }
          ]
        }
      ]
    },
    {
      header: 'Settings'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: <Settings size={20} />,
      children: [
        {
          id: 'customer',
          title: 'General Settings',
          icon: <Circle size={12} />,
          permissions: ['admin', 'editor'],
          navLink: '/misc/comicng-soon',
          newTab: true
        },
        {
          id: 'languages',
          title: 'Languages',
          icon: <Circle size={12} />,
          permissions: ['admin', 'editor'],
          navLink: '/misc/cooicng-soon',
          newTab: true
        }
      ]
    },
    {
      id: 'Marketing Banner',
      title: 'Marketing Banner',
      icon: <Octagon  size={12} />,
      navLink: '/apps/usser/view'
    },
    {
      id: 'Splash Screens',
      title: 'Splash Screens',
      icon: <Octagon  size={12} />,
      navLink: '/appss/user/view'
    },
    {
      id: 'FAQ',
      title: 'FAQ',
      icon: <Octagon  size={12} />,
      navLink: '/appss/user/n1view'
    }
  
]
