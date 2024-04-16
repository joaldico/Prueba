# $REPOSITORY and $IMAGE will be populated on build execution
FROM $REPOSITORY/$IMAGE

COPY build/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
