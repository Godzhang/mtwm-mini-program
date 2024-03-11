import { View } from "@tarojs/components";
import { Backdrop, Loading } from "@taroify/core";
import "./index.scss";
import { useEffect, useMemo, useState } from "react";

export default function MTLoading(props) {
  const [open, setOpen] = useState(false);
  const loadingType = useMemo(
    () => props.loadingType || "spinner",
    [props.loadingType]
  );
  const loadingText = useMemo(
    () => props.loadingText || "加载中...",
    [props.loadingText]
  );

  useEffect(() => {
    setOpen(!!props.open);
  }, [props.open]);

  return (
    <Backdrop
      className="flex-cc"
      open={open}
      closeable
      onClose={() => setOpen(false)}
    >
      <Loading className="mt-loading" type={loadingType} direction="vertical">
        {loadingText}
      </Loading>
    </Backdrop>
  );
}
