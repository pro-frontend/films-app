import { action } from "@storybook/addon-actions";
import { boolean, number, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Modal } from "./Modal";
import { Tmode } from "./Modal.types";

const stories = storiesOf("Components/Modal", module);

stories.addDecorator(withKnobs);

const modeOptions: Tmode[] = [Tmode.CREATE, Tmode.EDIT, Tmode.DELETE];

stories.add("Default", () => (
  <Modal
    onModalClose={action("onModalClose")}
    onModalSubmit={action("onModalSubmit")}
    onModalReset={action("onModalReset")}
    mode={select<Tmode>("Mode", modeOptions, Tmode.CREATE)}
    active={boolean("Active", true)}
    filmId={number("FilmId", 999_999_999)}
  />
));
