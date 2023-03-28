import React from "react";
import { Icon } from "../../../../shared/Icon/Icon";
import styles from "./ContactItem.module.scss";
import cn from "classnames";

interface Props {
  iconName: string;
  title: string;
  description: string;
  className?: string;
  additionalDescription?: string;
}

export const ContactItem: React.FC<Props> = ({ className, iconName, title, description, additionalDescription }) => {
  return (
    <div className={cn(styles.contactItem, className)}>
      <Icon iconName={iconName} />
      <div className={styles.contact}>
        <span className={styles.title}>{title}</span>
        <br></br>
        <span className={styles.description}>{description}</span>
        <br></br>

        {additionalDescription && (
          <span className={styles.additionalDescription}>{additionalDescription}</span>
        )}
      </div>
    </div >
  );
};
