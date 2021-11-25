import { Mail, MessageSquare, Octagon, BookOpen, Archive, Award, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

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
      id: 'categories',
      title: 'Categories',
      icon: <Octagon  size={12} />,
      navLink: '/apps/user/view'
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
      icon: <Octagon  size={12} />,
      navLink: '/apps/users/view'
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
