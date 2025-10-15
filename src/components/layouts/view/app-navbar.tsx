'use client'
import {
  IconBrandIntentui,
  IconCart,
  IconChevronLgDown,
  IconSearch,
  IconShoppingBag,
} from '@intentui/icons'
import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { Menu, MenuContent, MenuItem } from '@/components/ui/menu'
import {
  Navbar,
  NavbarGap,
  NavbarItem,
  NavbarMobile,
  type NavbarProps,
  NavbarProvider,
  NavbarSection,
  NavbarSeparator,
  NavbarSpacer,
  NavbarStart,
  NavbarTrigger,
} from '@/components/ui/navbar'
import { Separator } from '@/components/ui/separator'
import { UserMenu } from './user-menu'
import { Car, ShoppingBag } from 'lucide-react'

const categories = [
  {
    id: 1,
    label: 'Electronics',
    url: '#',
  },
  {
    id: 2,
    label: 'Fashion',
    url: '#',
  },
  {
    id: 3,
    label: 'Home & Kitchen',
    url: '#',
  },
  {
    id: 4,
    label: 'Sports',
    url: '#',
  },
  {
    id: 5,
    label: 'Books',
    url: '#',
  },
  {
    id: 6,
    label: 'Beauty & Personal Care',
    url: '#',
  },
  {
    id: 7,
    label: 'Grocery',
    url: '#',
  },
  {
    id: 8,
    label: 'Toys & Games',
    url: '#',
  },
  {
    id: 9,
    label: 'Automotive',
    url: '#',
  },
  {
    id: 10,
    label: 'Health & Wellness',
    url: '#',
  },
]

export default function AppNavbar(props: NavbarProps) {
  return (
    <NavbarProvider>
      <Navbar {...props} intent="default" className="shadow-sm">
        <NavbarStart>
          <Link
            className="flex items-center gap-x-2 font-medium"
            aria-label="Goto documentation of Navbar"
            href="/"
          >
            <IconCart className="size-6 sm:size-5" />
            <span>FayraShop</span>
          </Link>
        </NavbarStart>
        <NavbarGap />
        <NavbarSection>
          <NavbarItem href="#" isCurrent>
            Home
          </NavbarItem>
          <NavbarItem href="#">Shop</NavbarItem>
          <NavbarItem href="#">Offers</NavbarItem>
          <NavbarItem href="#">Orders</NavbarItem>
          <Menu>
            <NavbarItem>
              Categories
              <IconChevronLgDown className="col-start-3" />
            </NavbarItem>
            <MenuContent className="min-w-(--trigger-width) sm:min-w-56" items={categories}>
              {(item) => (
                <MenuItem id={item.id} textValue={item.label} href={item.url}>
                  {item.label}
                </MenuItem>
              )}
            </MenuContent>
          </Menu>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection className="max-md:hidden">
          <Button intent="plain" size="sq-sm" aria-label="Search for products">
            <IconSearch />
          </Button>
          <Button intent="plain" size="sq-sm" aria-label="Your Bag">
            <IconShoppingBag />
          </Button>
          <Separator orientation="vertical" className="mr-3 ml-1 h-5" />
          <UserMenu />
        </NavbarSection>
      </Navbar>
      <NavbarMobile>
        <NavbarTrigger />
        <NavbarSpacer />
        <Button intent="plain" size="sq-sm" aria-label="Search for products">
          <IconSearch />
        </Button>
        <Button intent="plain" size="sq-sm" aria-label="Your Bag">
          <IconShoppingBag />
        </Button>
        <NavbarSeparator className="mr-2.5" />
        <UserMenu />
      </NavbarMobile>
    </NavbarProvider>
  )
}
