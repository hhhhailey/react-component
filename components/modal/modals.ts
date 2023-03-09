import loadable from "@loadable/component";
import { ComponentProps, FunctionComponent } from "react";

const ConfirmModal = loadable(
  () => import("@/components/modal/design/confirm-modal/ConfirmModal"),
  { ssr: false }
);

const PagesModal = loadable(
  () => import("@/components/modal/design/page-modal/PageModal"),
  { ssr: false }
);

export const modals = {
  confirm: ConfirmModal as FunctionComponent<
    ComponentProps<typeof ConfirmModal>
  >,
  pages: PagesModal as FunctionComponent<ComponentProps<typeof PagesModal>>,
};
