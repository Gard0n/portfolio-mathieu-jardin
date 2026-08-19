"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { pushDataLayerEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: string;
  eventParams?: Record<string, unknown>;
};

export function TrackedLink({ event, eventParams, ...linkProps }: TrackedLinkProps) {
  return <Link {...linkProps} onClick={() => pushDataLayerEvent(event, eventParams)} />;
}
