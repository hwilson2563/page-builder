import Banner from '../components/templates/Banner'
import ButtonText from '../components/templates/ButtonText'
import FourImage from '../components/templates/FourImage'
import Gallery from '../components/templates/Gallery'
import LargeImage from '../components/templates/LargeImage'
import Linking from '../components/templates/Linking'
import OneImageText from '../components/templates/OneImageText'
import Product from '../components/templates/Product'
import Quote from '../components/templates/Quote'
import SingleButton from '../components/templates/SingleButton'
import TextOnly from '../components/templates/TextOnly'
import ThreeImage from '../components/templates/ThreeImage'
import TwoLargeImage from '../components/templates/TwoLargeImage'
import TwoSmallImage from '../components/templates/TwoSmallImage'
import BannerModal from '../components/modals/BannerModal'
import Video from '../components/templates/Video'

export const templatesIdx = [
  {
    thumbnailImg: 'banner_temp.png',
    tempName: 'Banner Template'
  },
  {
    thumbnailImg: 'button_text_temp.png',
    tempName: 'Button Text Template'
  },
  {
    thumbnailImg: 'four_img_temp.png',
    tempName: 'Four Image Template'
  },
  {
    thumbnailImg: 'gallery_temp.png',
    tempName: 'Gallery Template'
  },
  {
    thumbnailImg: 'large_img_temp.png',
    tempName: 'Large Image Template'
  },
  {
    thumbnailImg: 'linking_temp.png',
    tempName: 'Linking Template'
  },
  {
    thumbnailImg: 'one_img_text_temp.png',
    tempName: 'One Image Text Template'
  },
  {
    thumbnailImg: 'product_temp.png',
    tempName: 'Product Template'
  },
  {
    thumbnailImg: 'quote_temp.png',
    tempName: 'Quote Template'
  },
  {
    thumbnailImg: 'single_button_temp.png',
    tempName: 'Single Button Template'
  },
  {
    thumbnailImg: 'text_only_temp.png',
    tempName: 'Text Only Template'
  },
  {
    thumbnailImg: 'three_img_temp.png',
    tempName: 'Three Image Template'
  },
  {
    thumbnailImg: 'two_large_img_temp.png',
    tempName: 'Two Large Image Template'
  },
  {
    thumbnailImg: 'two_small_img_temp.png',
    tempName: 'Two Small Image Template'
  },
  {
    thumbnailImg: 'video_temp.png',
    tempName: 'Video Template'
  }
]

export const templatesData = {
  'Banner Template': {
    component: Banner,
    modal: BannerModal
  },
  'Button Text Template': {
    component: ButtonText
  },
  'Four Image Template': {
    component: FourImage
  },
  'Gallery Template': {
    component: Gallery
  },
  'Large Image Template': {
    component: LargeImage
  },
  'Linking Template': {
    component: Linking
  },
  'One Image Text Template': {
    component: OneImageText
  },
  'Product Template': {
    component: Product
  },
  'Quote Template': {
    component: Quote
  },
  'Single Button Template': {
    component: SingleButton
  },
  'Text Only Template': {
    component: TextOnly
  },
  'Three Image Template': {
    component: ThreeImage
  },
  'Two Large Image Template': {
    component: TwoLargeImage
  },
  'Two Small Image Template': {
    component: TwoSmallImage
  },
  'Video Template': {
    component: Video
  }
}
