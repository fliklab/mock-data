# Mock Server

Vercel Serverless Functions 을 기반으로 작동하는 Mock Server입니다.
JSON 및 이미지 파일을 정적으로 응답합니다.

## API 엔드포인트

| Method | Endpoint                    | 설명                     |
| ------ | --------------------------- | ------------------------ |
| GET    | `/api/banners?language=ko`  | 한국어 배너 목록         |
| GET    | `/api/banners?language=en`  | 영어 배너 목록           |
| GET    | `/api/favorites`            | 즐겨찾기 목록            |
| DELETE | `/api/favorites/:id`        | 즐겨찾기 삭제 (204 응답) |
| GET    | `/api/services?language=ko` | 한국어 서비스 목록       |
| GET    | `/api/services?language=en` | 영어 서비스 목록         |

### 사용 예시

```bash
# 배너 목록 조회 (한국어)
curl https://mock-121.vercel.app/api/banners?language=ko

# 배너 목록 조회 (영어, 기본값)
curl https://mock-121.vercel.app/api/banners

# 즐겨찾기 목록 조회
curl https://mock-121.vercel.app/api/favorites

# 즐겨찾기 삭제
curl -X DELETE https://mock-121.vercel.app/api/favorites/fav-opensea

# 서비스 목록 조회 (한국어)
curl https://mock-121.vercel.app/api/services?language=ko
```

## 이미지 URL

정적 파일은 `public/` 폴더에서 직접 서빙됩니다:

```
https://mock-121.vercel.app/production/images/banner_dcent.png
https://mock-121.vercel.app/production/images/banner_dcent.webp
https://mock-121.vercel.app/production/images/icon_opensea.png
```
