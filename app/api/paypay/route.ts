import { NextResponse } from "next/server";
const PAYPAY = require('@paypayopa/paypayopa-sdk-node');

export async function POST(request: Request) {
  const { amount, plan } = await request.json();

  const apiKey = process.env.PAYPAY_API_KEY;
  const apiSecret = process.env.PAYPAY_API_SECRET;
  const merchantId = process.env.PAYPAY_MERCHANT_ID;

  if (!apiKey || !apiSecret || !merchantId) {
    return NextResponse.json({ error: "PayPay認証情報が設定されていません" }, { status: 500 });
  }

  // PayPay SDKの設定
  PAYPAY.Configure({
    clientId: apiKey,
    clientSecret: apiSecret,
    merchantId: merchantId,
    productionMode: true, // 本番環境
  });

  // QRコード生成用のペイロード
  const orderDescription = `Logic Tennis Analyst - ${plan === "premium" ? "Premium" : "Standard"} Plan`;
  const merchantPaymentId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  
  const payload = {
    merchantPaymentId,
    amount: {
      amount,
      currency: "JPY"
    },
    codeType: "ORDER_QR",
    orderDescription,
    isAuthorization: false,
    redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/conf`,
    redirectType: "WEB_LINK"
  };

  console.log("PayPay SDK Request:", payload);

  try {
    // Promise化してasync/awaitで使う
    const response = await new Promise((resolve, reject) => {
      PAYPAY.QRCodeCreate(payload, (result: any) => {
        if (result.BODY?.resultInfo?.code === "SUCCESS") {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });

    const result: any = response;
    console.log("PayPay SDK Response:", result.BODY);

    if (result.BODY?.data?.url) {
      return NextResponse.json({ url: result.BODY.data.url });
    } else {
      return NextResponse.json({ 
        error: "決済URLの取得に失敗しました",
        details: result.BODY 
      }, { status: 400 });
    }
  } catch (error: any) {
    console.error("PayPay SDK Error:", error);
    return NextResponse.json({ 
      error: error.BODY?.resultInfo?.message || "PayPay決済の開始に失敗しました",
      details: error.BODY
    }, { status: 500 });
  }
}
