import { chakra, HTMLChakraProps } from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 172"
      {...props}
    >
      <image
        width="800"
        height="172"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA0CAYAAAAwjwU3AAALjUlEQVR4nO2dC5RVVRnH/3cYCQ1kRAQGYzKRCp+ABpVMZtZSl6WZBeSDVlm5sKyW+EjIYAhLXaZlpj3IbEUqlKUmrcLspVmoWFA+MXxMoSOoIDrAMMxtfWv971rH49n77n3Ouffuve/5rTVr5p57Zt9vn3Put/f+9vcoLZraj4D5MIDTAGxwqIu7A3gVQBeAzTb/2N8H9PUCc5aV0TEJGBjITaaDAKwFUAbQm+L/S/y9A8CLAP4L4HEADwL4DV8XuMd0AHfzvvVFpBsGYAWAD0aOyX08HsDWBvVCZHq6tUEfXi/OAnCco7JtAbDQATmEQQBa+PewDO0MBbA3gAkAjo4cvx/ANwEsyyhnQb5Uvv9v4E+UPRSvszwfWRnWUtv2G4rcjEMdlu8iAG92QI568A4AN3Om+4HwuxskZQc6VQ5ZYR0IYKwDcqgYDGCRm6LVjHYAKwH8NND+FdSYkBXWEQ7IUI3ZADrdFrEmnM5l4uAA+xYqJQf6VQrZhjXVARlMWAzgKIflE4NsNx9Y1UNbph1sJO1YJsiA8lcuFwvcZwPv85OGkooRfwSAUYr3t7LN3QzbE9voUyErrEkOyGDCewCc4fAy6V8WSmUPLsPFdjiDP7qRWZTWTQA+npOsBbXjVP7YIDv0SxXn3wLgk7bShrokFG18sANymLKQMxTfEZeIJwD8EsAsAG0Allfp06w0D25BcxKqwpoC4I0OyGHK/gDmOypbFtvFywBmGiikywDsmeFzCvwj1XMVqsKa7oAMtswD0OGXyMbcAOAzmpP3AfAlx2QucBCVDUtGxEMAvOTZTRugYXAMgBtpMI77j5QT/k46Fn1teiz698ucOc0ylF0c984BcL7h+b6xhDuisxVynwngEgC7Au1/QQ4kKSyZnVzv+cWdzh0oFxDb1McM5djHEZlrxTwuEeNe1eDs8hSFzatizI/Gkcmzuw3A/xLOlQH32MgOlXhnXwPgush5sqO5F4CdkWPiZrGJ4UW2yGcNj7UnO2A9HLxsOAbAibTDtrNPMhhLKNd6AHdxsyIa2iVLrHH8zF2RYyVeox31vtm1IElhuRIukhbZgr/XIXnmMExlpMG5Lvi61BL54vwIwNmKzzhBobDEO/7WhOMPxTZXZnJXKum5PjKmsK4A8ImE876dcnn6AwAnJRyfC+BKwzbkunyN7gAqJlOxXwvgagDnUUlKjOo/FP87DcB9KfrkHHEb1inU7j6zxpEwggovALjADVGcQLdr+F5LpR09dx7Df0xddfIeHLK0Nx7AOgDfraKs4nyBvkztVYLWgxkI4wrL99mVsNoBGeKYOtuFPsMS7tFkb+iwjP+sDEwn0v5lQ96DWtr2OukKckDK/x9JX7lOzXV1aQDPRFRhneOZ75KKvzsoUzMoIlN2VVmeTLRoayOXQtfUR/TckXjXP+bQ6N6cXb7Jsf7lTjSlyFcC6I+EA/zTATnS0iyK7WHNe+Mt2nmJ/mvjFO8PRAzeLl7bpVUchtfSBjqV12U8ow7EReSB2LljLZeTXlJZ739ZE/PjE/JFeM5j+ZtFYT2jec/GF+1dAN4dO7adu9xiK3uUCmuvlHLWkrk0oKuYrQjXWk9ltYQ255830wxeFNZ+ARmF73dAhoLqbNScYTNwjom9vo1+b9tjx7c5dk8G0QSjQoLh/2LQzi2OufDUnBYa2kMJgvZ967ZZRkqdX1LaEJ1vMCV2XFm5yMma5I3nGiqrCuLCc6EHfc6FVt5kU9bw4gxNSAsR/7KVDN7T/Y/Na1G8Q5h32kUKo/tr0TkxpsmRtZxuDb5wgkLOxwBclaIP4jv2RccTVuZCq2U8oYSN3Olwf3ynWRSbrp+2W/DbOSvxiXcqZL05ZR92MEPG5z27Dta0WDwg1xfKquY0i8LaXfOe7ZJuSUJ4jsuM0eyE/i6D3DbLSG8xVVji+r+gGS5IQV0YrvmQLZYC/NqzWzZWkWWzl6XR0vJEfbvRGEyXgz2O1fYLlWaZYY3WvNdj0U4f7ao+0aaQdSPDuNLyQkge7SpMZ1i6fN4FBba8RXO+zkcrzgZLBecCQxQyZHW92BYrhhokIVfNKXAXXQiYzdImTZXqRqMqtZ7Vtag1kDTbWmyM7gW1pxlmscOZ7kTFIxZt+fjsqnzQRmRM690WkD+lkmKGVR/2bYZOGnK0xo7zuKXC8pHnFTKPYNRJWkJNr/0aihlW7ZFrfHHonbRAlSIZOWUucJ1nNBtYR2aQ/fDwLtXrKRRW7ZFy9BMMPyX0JeE0hqWouKOx4mXCdDnWz8ygSZim0k7CJmLFW0JY806m53C8YIaqSIRKQZsWpDB9vZnT9PMs+jJgca6P6MJOHquzwlINDqaViOPYhMX8VhGe836mg7Z10D6+WSpotwYww5rPNBshsCKQfiTxPaaDUfH9Osujeu7bU7S1X5VUMXFuo/JOmjBcx6yrpjugEnv5LXuR/SQEo/thDsiQB/c6XK4+Kz8DcJamjf8wgLeeqEKADk+xNLct4d7NkKIkxjNrrkkOL/HpuhvAWy0/31t8t2G9LUMubNfoclSuLM/HR5hnvNoX+vwGLIdViR47mCPelAkpayFcoplFHULD/MWK/GAjGPDdw2ykTYPvNqwjHJAhD34FYKWjsolv0Nu59EiqJwgqtRJzWXXQpniyYZ3F77D/9ebfms+7knakassy8dj/U0q7lyjyzwH4seL9IdywWURn2kqBiXYqyfjqaBuPqe5REPhuw5rigAx54HJg+cQa+kbdzlJVjUBcKF5hbrc4+7PP4oLx54T321m7MGum3huYyK/aDO0Ag5XEBayzGMognojpDCupXLsLhOB7ci3LNDUbkt73ow3sswQLL2OJ/CQ6OHvqZurtV1iB+aCEyj47uaRNM7vp4g53FhveGSxo8dUMbXiBqQ1rVMrdk1rSFsAM61UAix2Qo95c2GBlVaHLIOh4HG1xsylzUhmyqzJumFxNRWhbk+BZ1iNcyiWkKpYw2EKqKgZblNuuF4eyPJnPXMqHrlm4k3afyx3pb3eKHb44t1MB65ISmvAwDejTWM5flbViO2d+p9H36x4eb2mGWFQbo/sMOrypjIT1ptMROdLyNIDL/BTdClEKt7LYaZYEdUnk4ZYjsh1LHzjbTagFNIojx8HzvkgxlXYuTYeyAO2LLGmfNCscokldszMn2WzJXYG28iLoEqpFuZx+IuVYsYCkfFk2x+J/646VuSvTGylP7tvIMpqFExr1IMXZEknPm7bqTIn92cJZo8wYVtHHKivS3t9od9rFtmQH8sGc+r+SJgZRQJ+tkhFVvi83Avh6bHa8ikHuld28EpeTWTKBPmsxA2/XzPLiUSAVNjG18tZY2pt9cyod1k3l2xNzW+lIe+9Ki6b2n6lxYnOZzsh0uCno7wP6eoE5y8romAQMhB7I0xhaWJx1MpXibpzRPMcYwDxqXx5Du9iGyGAr5eZX0x6VhlPpoBunhwoiiOR+rVwvf1pTycNFni+KphbUiAEOhLUcDCWU5+yE45sZT7k5RZszFMcfCSkTacUGML/Bctiypkptu4ICl1mhWHq3pUxF9CEAJyneCyplT0Vh/QHATQ2WxYZV/ohaUPA6ZHn5E8VlOdfSn+p9VSIFfPpeVyW6y7LAI6/31Q7IUFCQhYWakmZddCb+FAOb4w6po5iGRpxv79L4X/2Qu4rBEN3GXUe/oIs86NxaB2QoKMiCzLJO19RVPJj2ZTAPvBjP+7mDOcbApUN2K+eGdofinV7sgSOjGBHXOyBHQUFW7jDMMronA54n0lm0mrKSXc3j6K4QFPGO93oQj/SAAzIUFOTFL7jsezSn9tYyePuhEO9QkqZe4rhRW5UPu6DAV9Zx9jQzQ2aMpxgEfZgm15f3qEIR5jIX+SaH8owP4vr99w7IUlBQC5bz50AmEZzCyJLRDM+R76vYsSRzhHw3n6SLjywtw195APg/0xIU+N24vB8AAAAASUVORK5CYII="
      />
    </chakra.svg>
  );
};
