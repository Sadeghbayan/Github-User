import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faCodeBranch,
  faStar,
  faInfoCircle,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";

library.add(
  fas,
  faTwitter,
  faInstagram,
  faCodeBranch,
  faStar,
  faInfoCircle,
  faEye
);

export { FontAwesomeIcon };
