import React, { FC } from "react";


import { ReactComponent as IconCatalog } from "../../../public/assets/icons/catalog.svg";
import { ReactComponent as IconBurgerMenu } from "../../../public/assets/icons/burgerMenu.svg";
import { ReactComponent as IconClose } from "../../../public/assets/icons/close.svg";
import { ReactComponent as IconBasket } from "../../../public/assets/icons/basket.svg";
import { ReactComponent as IconBasketButton } from "../../../public/assets/icons/basketButton.svg";
import { ReactComponent as IconDownload } from "../../../public/assets/icons/download.svg";
import { ReactComponent as IconLocation } from "../../../public/assets/icons/location.svg";
import { ReactComponent as IconMail } from "../../../public/assets/icons/mail.svg";
import { ReactComponent as IconPhone } from "../../../public/assets/icons/phone.svg";
import { ReactComponent as IconPhoneFilled } from "../../../public/assets/icons/phoneFilled.svg";
import { ReactComponent as IconSearch } from "../../../public/assets/icons/search.svg";
import { ReactComponent as IconArrowRight } from "../../../public/assets/icons/arrowRight.svg";
import { ReactComponent as IconSultanLogo } from "../../../public/assets/icons/sultanLogo.svg";
import { ReactComponent as IconBox } from "../../../public/assets/icons/box.svg";
import { ReactComponent as IconBottle } from "../../../public/assets/icons/bottle.svg";
import { ReactComponent as IconArrowDown } from "../../../public/assets/icons/arrowDown.svg";
import { ReactComponent as IconBin } from "../../../public/assets/icons/bin.svg";
import { ReactComponent as IconShare } from "../../../public/assets/icons/share.svg";
import { ReactComponent as PaginationArrow } from "../../../public/assets/icons/paginationArrowLeft.svg";
import { ReactComponent as IconMasterCard } from "../../../public/assets/icons/master.svg";
import { ReactComponent as IconVisa } from "../../../public/assets/icons/visa.svg";
import { ReactComponent as IconSultanLogoWhite } from "../../../public/assets/icons/sultanLogoWhite.svg";
import { ReactComponent as IconTelegram } from "../../../public/assets/icons/telegram.svg";
import { ReactComponent as IconWhatsap } from "../../../public/assets/icons/whatsap.svg";
import { ReactComponent as IconGoBack } from "../../../public/assets/icons/navVector.svg";


interface IconMap {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const ICON_MAP: IconMap = {
    catalog: IconCatalog,
    burgerMenu: IconBurgerMenu,
    close: IconClose,
    basket: IconBasket,
    basketButton: IconBasketButton,
    download: IconDownload,
    location: IconLocation,
    mail: IconMail,
    phone: IconPhone,
    phoneFilled: IconPhoneFilled,
    search: IconSearch,
    vectorToRight: IconArrowRight,
    sultanLogo: IconSultanLogo,
    box: IconBox,
    bottle: IconBottle,
    arrowDown: IconArrowDown,
    bin: IconBin,
    share: IconShare,
    paginationArrow: PaginationArrow,
    master: IconMasterCard,
    visa: IconVisa,
    sultanLogoWhite: IconSultanLogoWhite,
    telegram: IconTelegram,
    whatsap: IconWhatsap,
    goBack: IconGoBack,
};

interface Props {
    iconName: string;
    className?: string;
}

export const Icon: FC<Props> = ({ iconName, className }) => {
    const Component = ICON_MAP[iconName];

    return Component ? <Component className={className} /> : null;
}

